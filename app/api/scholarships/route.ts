import { getOpenAi } from '@/lib/config/openai';
import { scholarshipFilters } from '@/lib/data';
import { ScholarshipFilters } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const openAiModel = getOpenAi();

  const searchParams = req.nextUrl.searchParams;

  let _query = '';

  [...searchParams.entries()].forEach((entry) => {
    const key = entry[0] as keyof ScholarshipFilters;
    const value = entry[1];

    if (
      scholarshipFilters[key] &&
      scholarshipFilters[key].list.includes(value)
    ) {
      _query += scholarshipFilters[key].getQuery(value) + `\n`;
    }
  });

  try {
    const result = await openAiModel.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an AI assistant tasked with creating a JSON-formatted response containing a list of schools offering scholarship opportunities in the United States. This information is intended for a web application that helps users discover relevant scholarships. ',
        },
        {
          role: 'user',
          content: `Output Format: The output must be a valid JSON object with an array of school and scholarship details. Each entry should include the following fields:

school_name (string): Name of the school offering the scholarship.
scholarship_name (string): Name of the scholarship.
organization (string, optional): The organization funding the scholarship (if applicable).
eligibility_criteria (string): Key eligibility requirements (e.g., GPA, citizenship, major).
start_date (string): Application start date in YYYY-MM-DD format.
end_date (string): Application deadline in YYYY-MM-DD format.
fully_funded (boolean): Indicates whether the scholarship is fully funded.
percentage_funded (number, optional): If not fully funded, the percentage of funding provided.
amount (number, optional): Scholarship amount if it's a fixed grant.
eligible_faculties (array of strings): List of eligible faculties (e.g., "Computer Science", "Engineering").
application_link (string): Direct link to the scholarship application page.
Sources: Pull information from public, reliable sources (e.g., official school websites, scholarship directories) to ensure the data is up-to-date and accurate.

Number of Results: Provide a list of at least 20 scholarships. Ensure diversity in schools and scholarship types.

 ${_query ? `Filters: Include scholarships that are: ${_query}` : ''}

  
  
  Style: The response should be well-structured, without extraneous text, and easily parseable.
  
`,
        },
      ],
    });

    const response = result.choices[0].message.content;

    const sanitizedResponse = response
      ?.trim()
      .replace(/^```json/, '')
      .replace(/```$/, '');

    return NextResponse.json({
      result: JSON.parse(sanitizedResponse as string),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

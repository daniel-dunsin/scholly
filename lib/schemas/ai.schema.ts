import { ResponseSchema, SchemaType } from '@google/generative-ai';

const scholarship: ResponseSchema = {
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      school_name: {
        type: SchemaType.STRING,
        description: 'Name of the school offering the scholarship',
        nullable: false,
      },
      scholarship_name: {
        type: SchemaType.STRING,
        description: 'Name of the scholarship.s',
        nullable: false,
      },
      organization: {
        type: SchemaType.STRING,
        description:
          'The organization funding the scholarship (if applicable).',
      },
      eligibility_criteria: {
        type: SchemaType.STRING,
        description:
          'Key eligibility requirements (e.g., GPA, citizenship, major).',
      },
      start_date: {
        type: SchemaType.STRING,
        description: 'The application start date, in date-time format',
        nullable: true,
      },
      end_date: {
        type: SchemaType.STRING,
        description: 'The application end date/deadline, in date-time format',
        nullable: true,
      },
      fully_funded: {
        type: SchemaType.BOOLEAN,
        description: 'If it is fully funded scholarship or not',
        nullable: false,
      },
      percentage_funded: {
        type: SchemaType.NUMBER,
        description:
          'If it is fully funded, return 100, if it is not fully funded return the percentage funded',
        nullable: true,
      },
      amount: {
        type: SchemaType.NUMBER,
        description:
          'The scholarship price if it is neither fully funded nor partially funded, just a grant',
        nullable: true,
      },
      eligible_faculties: {
        type: SchemaType.ARRAY,
        items: {
          type: SchemaType.STRING,
        },
        description:
          'Falculties that are eligible, like Computer Science, Engineering, Mathematics, e.t.c. Return "All" if all departments can.',
        nullable: true,
      },
      total_eligible_countries: {
        type: SchemaType.NUMBER,
        description:
          'The total amount of countries that are eligible for the scholarship, return null if all countries',
        nullable: true,
      },
      application_link: {
        type: SchemaType.STRING,
        description: 'The link for applying for the scholarship',
        nullable: true,
      },
    },
  },
};

const aiSchemas = {
  scholarship,
};

export default aiSchemas;

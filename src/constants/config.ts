type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  socials: {
    github: string;
    linkedin: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Dipan Majumdar — Portfolio",
    fullName: "Dipan Majumdar",
    email: "dipanmajumdar2005@gmail.com",
  },
  socials: {
    github: "https://github.com/MAJUMDARcu",
    linkedin: "https://www.linkedin.com/in/dipan-majumdar/",
  },
  hero: {
    name: "Dipan",
    p: ["I build data-driven tools for", "equity research and market analysis"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a third-year BSc Data Science student and aspiring equity research
      analyst, working at the intersection of data science and Indian equity markets.
      I'm IBM-certified in data analysis and hold a Power BI Data Modeling certification,
      with a Yale Financial Markets course completion on the finance side. I'm currently
      preparing for the NISM Series XV Research Analyst exam and CFA Level 1. I like
      turning market and business data into tools that actually answer a question, not
      just dashboards for their own sake.`,
    },
    experience: {
      p: "Education & certifications",
      h2: "Background.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Projects that combine data science with financial and business analysis,
      each one described with the actual problem it solves, the approach taken, and
      what came out of it, with links to the code.`,
    },
  },
};

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

// TODO: replace [Your Last Name] and the email below with your real details.
export const config: TConfig = {
  html: {
    title: "Dipan [Your Last Name] — Portfolio",
    fullName: "Dipan [Your Last Name]",
    email: "your.email@example.com",
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
      content: `I'm a third-year BSc Data Science student building toward equity
      research analyst roles, working at the intersection of data science and
      Indian equity markets. I hold an IBM Data Analyst Professional
      Certificate and a Yale Financial Markets course completion, and I'm
      currently preparing for the NISM Series XV Research Analyst exam and
      CFA Level 1. I like turning market data into tools that actually
      answer a question, not just dashboards for their own sake.`,
    },
    experience: {
      p: "Education & certifications",
      h2: "Background.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Projects that combine data science with financial markets,
      each one described with the actual problem it solves, the approach
      taken, and what came out of it, with links to the code.`,
    },
  },
};

export interface CaseStudy {
    title: string;
    subtitle: string;
    heroImage: string;
    industryInfo: string;
    projectDuration: string;
    theprocessText:string,
    clientSatisfaction: number;
    afterHeroSection:string;
    description?:string;
    type:string[];
    name: string;
    problemSolutionResult: Array<{
      heading: string;
      subheading: string;
      points: string[];
  }>;
    techs: Array<{
      name: string;
      icon: () => JSX.Element;
    }>;
    bussinessNeeds?:
      {
        title?: string;
        description?: Array<string>;
      }
    ;
     results?:
      {
        title?: string;
        description?: Array<string>;
      }
    ;
 
    processSteps: Array<{
      title: string;
      description: string[];  
    }>;
    keyFeatures: Array<string | { title: string; details: string[] }>;
   
    keyFeaturesImage: string[];
    bgImage:string 

  }
export interface Job {
  jobId: string;
  title: string;
  salary: string;
  benefits: string;
  jobType: string;
  jobLocation: string;
  jobReference: string;
  description: string;
  jobFilled: string;
  createdAt: string;
}

export const BlankJob = () => {
  return {
    jobId: "",
    title: "",
    salary: "",
    benefits: "",
    jobType: "",
    jobLocation: "",
    jobReference: "",
    description: "",
    jobFilled: "false",
    createdAt: ""
  };
};

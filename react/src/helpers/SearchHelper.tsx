import Job from "../models/job";

export const checkJob = (job: Job, searchJob: Job) => {
  const regex = new RegExp(`^.*${job.title}.*$`, "i");
  if (job.title) {
    if (!regex.test(searchJob.title)) {
      return false;
    }
  }
  if (job.salary) {
    const searchJobSalary: number = parseInt(searchJob.salary.replace(/[£,+]/g, ""));
    const thisJobSalaray: number = parseInt(job.salary.replace(/[£,+]/g, ""));
    if (searchJobSalary < thisJobSalaray) {
      return false;
    }
  }
  if (job.benefits) {
    if (searchJob.benefits !== job.benefits) {
      return false;
    }
  }
  if (job.jobType) {
    if (searchJob.jobType !== job.jobType) {
      return false;
    }
  }
  if (job.jobLocation) {
    if (searchJob.jobLocation !== job.jobLocation) {
      return false;
    }
  }
  return true;
};

export const generateSearchTerm = (job: Job) => {
  let searchTerm: string = "";
  if (job.title) {
    searchTerm += job.title + " ";
  }
  if (job.salary) {
    searchTerm += job.salary + " ";
  }
  if (job.benefits) {
    searchTerm += job.benefits + " ";
  }
  if (job.jobType) {
    searchTerm += job.jobType + " ";
  }
  if (job.jobLocation) {
    searchTerm += job.jobLocation + " ";
  }
  return searchTerm;
};
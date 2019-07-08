import { Component, Vue } from "vue-property-decorator";
import Job from "@/models/job";
import { jobs } from "@/services/job-service";

@Component
export default class JobsComponent extends Vue {
  date: string = new Date().toISOString();

  jobs: Job[] = [
    {
      _id: "string",
      title: "Title 1",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 2",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 3",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 4",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 5",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 6",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 7",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 8",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 9",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 10",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 11",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 12",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    },
    {
      _id: "string",
      title: "Title 13",
      salary: "£32,000",
      benefits: "Pension",
      jobType: "Engineering",
      location: "Cardiff",
      reference: "B9892382",
      description:
        "Opportunity for a project engineer to join a specialist engineering consultancy to work in a home-based capacity dealing with their customer base across South Wales. You will work on a wide spectrum of projects with a varied customer base supporting the more senior members of the team in the delivery of projects.        The project engineer will also be involved in the delivery of the projects that have been identified including sourcing equipment and liaising with 3rd parties. As the role involves home working there is flexibility to manage your diary as you need to in order to deliver on the customer requirements.",
      createdAt: this.date,
      updatedAt: this.date
    }
  ];

  page: number = 1;
  jobsPerPage: number = 3;
  jobsPages: number = Math.ceil(this.jobs.length / this.jobsPerPage);
  jobsPaged: Job[] = [];

  onPageChange() {
    this.jobsPaged = this.jobs.slice((this.page - 1) * this.jobsPerPage, (this.page) * this.jobsPerPage);
  }

  mounted() {
    this.onPageChange();
  }
}

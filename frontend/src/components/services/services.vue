<template>
  <v-layout column>
    <v-flex xs12>
      <v-img :src="require('@/assets/background1.jpg')" height="100vh">
        <v-layout column text-xs-right justify-end fill-height class="header-padding">
          <h1 class="header-text primary--text">Services</h1>
        </v-layout>
      </v-img>
    </v-flex>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-center>
        <v-flex md8 sm10 xs12 mb-4>
          <h2 class="content-title primary--text mb-4">Client Services</h2>
          <p>Stem is a specialist permanent recruitment consultancy providing sustainable recruitment solutions for the science, technology, engineering and manufacturing industries in South Wales. Our approach to recruitment is simple but that of care, integrity, attention to detail, and solutions that make a genuine difference, short-term and long-term.</p>
          <h2 class="content-title primary--text mt-4 mb-4">Industries &amp; Roles</h2>
          <v-layout row wrap>
            <v-flex md4 sm5 xs12 mb-4>
              <p>We have expertise and experience in recruiting for the following industries:</p>
              <ul class="mb-3">
                <li>Automotive</li>
                <li>Aerospace</li>
                <li>Pharmaceutical</li>
                <li>Life Science</li>
                <li>Medical Device</li>
                <li>Electronic</li>
                <li>Semiconductor</li>
                <li>FMCG</li>
                <li>Food Manufacturing</li>
                <li>Oil &amp; Gas</li>
                <li>Chemicals Manufacturing</li>
                <li>Materials Manufacturing</li>
                <li>Heavy Industry</li>
                <li>Digital</li>
                <li>Technology</li>
              </ul>
            </v-flex>
            <v-flex md4 sm5 xs12 class="mb-4">
              <p>And recruit for permanent vacancies in the following areas:</p>
              <ul class="mb-3">
                <li>Engineering</li>
                <li>Supply Chain</li>
                <li>Scientific</li>
                <li>Quality/Compliance</li>
                <li>H&amp;S</li>
                <li>Customer Service</li>
                <li>Sales</li>
                <li>Management/Executive</li>
                <li>Administration</li>
                <li>Graduates</li>
              </ul>
            </v-flex>
          </v-layout>
          <h2 class="content-title primary--text mb-4">Our Recruitment Process</h2>
          <p>We provide a thorough 5-stage recruitment and vetting process which ensures that we not only find the right fit for our clients, but also the right fit for the candidate, ensuring all parties are satisfied.</p>
        </v-flex>
        <v-flex md8 sm10 xs12 mb-4 class="services-stepper">
          <v-stepper v-model="stepper" vertical>
            <v-stepper-step :complete="stepper > 1" step="1">Vacancy registration</v-stepper-step>
            <v-stepper-content step="1">
              <p>Via a telephone or face-to-face meeting, we listen to your recruitment needs and:</p>
              <ul class="mb-3">
                <li>Discuss the job description and understand the job responsibilities.</li>
                <li>Understand the skills and qualifications that you are looking for, identifying essential and desirable requirements.</li>
                <li>Understand the training, progression and other opportunities the vacancy might hold.</li>
                <li>Understand your business culture and establish behavioral competencies that will be needed to fit in with the role and company culture.</li>
                <li>We can provide expert advice as to what skills are available, as well as advice on industry trends.</li>
                <li>Once we have established what you are looking for, we tailor our recruitment process to meet your requirements, and begin a candidate sourcing and selection process.</li>
              </ul>
              <v-btn color="primary" @click="next()">Next</v-btn>
              <v-btn @click="prev()" flat>Prev</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="stepper > 2" step="2">Candidate sourcing</v-stepper-step>
            <v-stepper-content step="2">
              <p>We search through our large network of candidates to find you the right candidate. We use a variety of sourcing tools including:</p>
              <ul class="mb-3">
                <li>Internal database of science, technology, engineering and manufacturing professionals in South Wales.</li>
                <li>UK job boards – including advertising and access to millions of CVs UK-wide.</li>
                <li>Social media – LinkedIn, Twitter and Facebook.</li>
                <li>Stem Website – advertising on Stem’s website job page.</li>
                <li>Networking and events – we network at industry events meeting with both active and passive candidates.</li>
                <li>Education links – for graduate roles, we have strong links with South Wales’ universities.</li>
              </ul>
              <v-btn color="primary" @click="next()">Next</v-btn>
              <v-btn @click="prev()" flat>Prev</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="stepper > 3" step="3">Candidate interviews</v-stepper-step>
            <v-stepper-content step="3">
              <p>Candidates selected from sourcing will be screened further via a telephone or face-to-face interview by Stem and will be evaluated on the following:</p>
              <ul class="mb-3">
                <li>Current salary, benefits package and expectations vs. what your opportunity offers.</li>
                <li>Location/commute to your business and hours of work.</li>
                <li>Relevant skills, qualifications and behavioral competencies.</li>
                <li>Career plans and aspirations.</li>
                <li>Availability.</li>
              </ul>
              <v-btn color="primary" @click="next()">Next</v-btn>
              <v-btn @click="prev()" flat>Prev</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="stepper > 4" step="4">Job application email</v-stepper-step>
            <v-stepper-content step="4">
              <p>Following the first stage Stem interview, candidates will be sent a job application email including:</p>
              <ul class="mb-3">
                <li>The job description.</li>
                <li>Job advert.</li>
                <li>Your company website.</li>
                <li>An application form with questions or technical test can also be sent. The job application email tests the candidate’s interest and commitment.</li>
              </ul>
              <v-btn color="primary" @click="next()">Next</v-btn>
              <v-btn @click="prev()" flat>Prev</v-btn>
            </v-stepper-content>

            <v-stepper-step step="5">Final interview &amp; candidate submission</v-stepper-step>
            <v-stepper-content step="5">
              <p>Once the candidate has reviewed the job application email, Stem will conduct a final interview with the candidate to further gauge their interest and suitability for the role before presenting you their details. Once we have sent you their CV, we will continue to provide support during the process from when you first interview the candidate, through to the job offer and the candidate’s first day, providing feedback and advice to you and the candidate throughout.</p>
              <v-btn color="primary" @click="next()">Reset</v-btn>
              <v-btn @click="prev()" flat>Prev</v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-btn flat color="primary" to="/" class="mb-5">Home</v-btn>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./services.ts"></script>
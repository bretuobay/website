import { Injectable } from '@angular/core';

export const serviceNames = {
  Design: 'Design',
  Engineering: 'Engineering',
  Technology: 'Technology',
  Support: 'Support'
};

@Injectable()
export class DataService {

  constructor() { }

  get services() {
    return [
      {
        name: serviceNames.Design,
        summary: `Through data and user research, experimentation,
                  and testing, we ensure what we’re building engages
                  with your users the way they want.`,
        icon: 'design',
        link: '/services/design',
        articles: [
          {
            title: 'Design research and strategy',
            summary: `To make successful products for companies that
            see diverse sets of users, we take a holistic approach.
            We benchmark a product against the market to identify and
            better understand its users and to clarify the path, tools,
            and processes needed to best design it.`
          }, {
            title: 'User testing',
            summary: `User testing lets us develop better apps from
            first release, reducing cost and rework. We handle recruiting,
            Q&A, and conducting tests while our clients enjoy the benefit
            of full qualitative research and analysis.`
          },
          {
            title: 'Visual design',
            summary: `Visual design defines a product’s look, feel, and
            character in more ways than one. Typography, color, proportion,
            hierarchy, and layout are some of the essential concepts our
            team considers in-depth. Our designs get users to engage,
            enticing them to come back for more, especially when design
            is married with opportunities found in the technologies wechampion.`
          }
        ]
      },
      {
        name: serviceNames.Engineering,
        summary: `Using the best technologies for progressive web
                  apps our engineers expertly architect and implement
                  quality code that is cost effective for you, and is
                  further supported by our design.`,
        icon: 'engineering',
        link: '/services/engineering',
        articles: [
          {
            title: 'Meet and exceed expectations',
            summary: `Our project managers apply modern techniques to
            monitor scope, schedule, cost, and quality of every project
            so that it is delivered on time and within budget. Whether
            it’s honing in on a minimum viable product (MVP) or hitting
            a key time to market objective, we select the right recipe
            of practices.`
          }, {
            title: 'Develop and build great software',
            summary: `Our experienced engineers know that quality code
            is more cost-effective over the long term. We also believe
            that testing is the responsibility of the software engineering
            team, not a separate function, as it creates accountability
            and reduces QA.`
          },
          {
            title: 'Achieve and maintain success',
            summary: `Your team may be swamped or require supplemental
            training in the technologies we use. We’ll pair with them
            to sharpen their skills and keep your project on track. We
            also offer staff augmentation to help get you to launch even
            quicker.`
          }
        ]
      },
      {
        name: serviceNames.Technology,
        summary: `We use technologies proven and supported by a large
                  open-source community and adopted by leading companies
                  like Apple, Netflix, Microsoft, and IBM.`,
        icon: 'tech',
        link: '/services/technology',
        articles: [
          {
            title: 'Employ the right technology',
            summary: `Our preferred technologies are Angular, Elixir,
            and Phoenix. They’re proven and supported by a large
            open-source community and adopted by leading companies.
            They’re easy to migrate engineering teams to and offer
            long-term maintainability.`
          }, {
            title: 'Angular',
            summary: `Angular is built for productivity. Designed with
            developer ergonomics in mind, its friendly APIs help you
            get your job done fast. It incorporates common idioms so
            you can focus on what makes your app special, not reinvent
            the wheel. Write dramatically less code with integrated
            templates that update automatically when the underlying
            data changes.`
          },
          {
            title: 'Elixir',
            summary: `Elixir is a dynamic, functional language designed
            for building scalable and maintainable applications. It
            leverages the Erlang VM known for running low-latency,
            distributed, and fault-tolerant systems while also
            successfully used in web development and the embedded
            software domain.`
          },
          {
            title: 'Phoenix',
            summary: `Phoenix brings back the simplicity and joy in
            writing modern web applications by mixing tried-and-true
            technologies with fresh functional ideas. It leverages the
            Erlang VM ability to handle millions of connections alongside
            Elixir’s syntax and productive tooling for building
            fault-tolerant systems.`
          }
        ]
      },
      {
        name: serviceNames.Support,
        summary: `We provide insight, resources, and the knowledge your
                  team can learn and grow from to ensure comfort and
                  success moving forward.`,
        icon: 'support',
        link: '/services/support',
        articles: [
          {
            title: 'Set up and ensure continued success',
            summary: `Our expertise reaches beyond just application
            design and engineering. We provide additional insight,
            resources, and knowledge your team can learn and grow from
            to ensure comfort and success moving forward.`
          }, {
            title: 'Trainings tailored to your challenge',
            summary: `We train your team on-site or over the web on any
            of our technologies and methods. Engagements typically last
            two days and are appropriate for all skill levels. Our training
            in basics, testing, working with back ends, deployment, and
            optimization can enhance your team’s skills or help onboard
            your new engineers without slowing down your existing team.`
          },
          {
            title: 'Code audits for existing products',
            summary: `If you have an existing product and are looking for
            suggestions on best practices to ensure long-term integrity,
            our team can produce a report that breaks down your application
            and gives you a guide for the future. We also do periodic code
            audits for teams that have adopted progressive web apps, Angular,
            Elixir, or Phoenix. We’ll ensure your apps are set up to be
            cost-effective over time and that they employ the most
            up-to-date techniques.`
          }
        ]
      }
    ];
  }

}

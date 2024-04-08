import AppLink from "../AppLink/AppLink";

const Career = () => {
  return (
    <div>
      <ul className="flex flex-col gap-8">
        <li>
          <b className="text-lg">SOLENNIAL</b> - Front-end Software Developer |
          October 2023 - Present
          <ul className="ms-4 flex flex-col gap-2">
            <li>o Languages and Frameworks - NextJS using Typescript; </li>
            <li>
              o Tools - Github; Insomnia; Scrum; Swagger; Vercel; AWS; Google
              Analytics.
            </li>
            <li>
              o Project
              <ul className="ms-4 flex flex-col">
                <li>
                  <AppLink
                    text={"▪ Solennial (NextJS | React)"}
                    href="https://solennial.com/"
                    isBlank
                    isUnderlined
                  />
                  - Working as a solo front-end engineer, maintaining
                  deployments, developing features, design, CD/CI,
                  documentation, analytics and others.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b className="text-lg">PROFUSION</b> - Front-end Software Developer |
          September 2021 - April 2023
          <ul className="ms-4 flex flex-col gap-2">
            <li>
              o Languages and Frameworks - React Native using Typescript and
              Android (XML and Jetpack Compose) with Kotlin.
            </li>
            <li>
              o Tools - Github, Gitlab and Azure; Postman and Insomnia; Charles
              and Flipper; Redux, Recoil and MutableState; Scrum and Kanban;
              Sentry and Firebase; Fastlane.
            </li>
            <li>
              o Projects
              <ul className="ms-4 flex flex-col gap-2">
                <li>
                  <AppLink
                    text={"▪ Audacy (React Native)"}
                    href="https://www.audacy.com/about"
                    isBlank
                    isUnderlined
                  />
                  - Worked as a team member, after joining the project I managed
                  to significantly improve the Android app performance by
                  reducing unnecessary re-renders of the app and improving
                  implementation of the media player bridge.
                </li>
                <li>
                  <AppLink
                    text={"▪ Traeger (Native Android)"}
                    href="https://www.traeger.com/app"
                    isBlank
                    isUnderlined
                  />
                  - Worked as a team member where I helped with the
                  implementation of new features and bug fixes during the
                  sprints. ▪ PLI (React Native) - Worked as a team member from
                  the begin to the end of the project, helped with initial
                  configuration of the software, new features, bug fixes and a
                  deep dive into video streaming with the react-native-video
                  library.
                </li>
                <li>
                  <b>▪ quickstart-android (Internal Profusion Project)</b> -
                  Worked as a team member (1 year) and a team leader (6 months),
                  got the opportunity to lead a team of 8 developers, where I
                  would set our goals for the sprint, interact with the client
                  to understand the priorities, and guarantee that the team
                  would be performing as expected.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b className="text-lg">TOTEM TI</b> - Fullstack Junior Developer |
          April 2021 - September 2021
          <ul className="ms-4 flex flex-col gap-2">
            <li>
              o Languages and Frameworks - Angular using Typescript, Spring Boot
              with Java;
            </li>
            <li>
              o Tools - Bitbucket; Insomnia; Scrum and Kanban; Swagger;
              Confluence; Jenkins.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Career;

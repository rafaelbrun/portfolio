import AppLink from "../AppLink/AppLink";

const Education = () => {
  return (
    <div>
      <p>
        <b>Bachelor</b>
      </p>
      <b>Computer Engineering - August 2022</b>
      <p>
        <AppLink
          href="https://cba.ifmt.edu.br/"
          text="Federal Institute of Education, Science and Technologie from Mato Grosso (IFMT)"
          isBlank
          isUnderlined
        />
      </p>
      <p className="mt-2">
        Final course work:{" "}
        <AppLink
          href="https://drive.google.com/file/d/1x5OomTwXP6JV2qt_zZYiS_FefNJbZq__/view?usp=sharing"
          text="Library Management Mobile App"
          isBlank
          isUnderlined
        />
      </p>
      <p>
        Android and iOS app that allows a library to manage its books and
        customers.
      </p>
      <p>
        Full stack project made with React native and typescript on the front
        end and NodeJs and typescript on the back end.
      </p>
      <p>
        Front end Repo:{" "}
        <AppLink
          href="https://github.com/rafaelbrun/biblioteca-ifmt"
          text="github.com/rafaelbrun/biblioteca-ifmt"
          isBlank
          isUnderlined
        />
      </p>
      <p>
        Back end Repo:  
        <AppLink
          href="https://github.com/rafaelbrun/biblioteca-ifmt-backend"
          text="github.com/rafaelbrun/biblioteca-ifmt-backend"
          isBlank
          isUnderlined
        />
      </p>
    </div>
  );
};

export default Education;

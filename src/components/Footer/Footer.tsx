const Footer = (): JSX.Element => {
  return (
    <footer className="bg-darkred-700 pb-24 pt-16">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-col justify-end gap-24 sm:flex-row">
          <section>
            <h2 className="font-bold uppercase tracking-wider text-palered">
              CONTACT
            </h2>
            <ul className="mt-4 flex flex-col gap-4 sm:mt-8">
              <li className="text-palered">{`+61 0434849738`}</li>
              <li className="text-palered">{`rafaelbrungolin@gmail.com`}</li>
              <li className="text-palered">{`Brisbane - QLD | Australia`}</li>
            </ul>
          </section>
        </div>

        <p className="mt-12 text-right text-pumpkin">
          &copy; {new Date().getFullYear()} {`Rafael Brun Golin`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

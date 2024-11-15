const Footer = () => {
    return (
        <div className="bg-emerald-300 py-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight mx-4">
              HungryHive.com
            </span>
            <span className="text-white tracking-tight flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </span>
          </div>
        </div>
    );
};

export default Footer;
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="ECKSBEE FOUNDATION Logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="font-gelasio">ECKSBEE FOUNDATION</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</a>
          <a href="#mission" className="text-sm font-medium hover:opacity-70 transition-opacity">Mission</a>
          <a href="#contact" className="text-sm font-medium hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/logo.jpg"
            alt="ECKSBEE FOUNDATION Logo"
            width={120}
            height={120}
            className="rounded-full object-cover mx-auto mb-8"
            priority
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="font-gelasio">ECKSBEE FOUNDATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            <a href="https://xbrl.org" target="_blank" rel="noopener noreferrer" className="font-medium underline hover:opacity-70">XBRL</a> for humanity&apos;s future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background transition-colors hover:opacity-80 font-medium"
            >
              Get Involved
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Us</h2>
          
          {/* Mission Hero Image */}
          <div className="mb-16">
            <Image
              src="/mission.png"
              alt="ECKSBEE FOUNDATION Mission"
              width={800}
              height={400}
              className="rounded-2xl object-cover mx-auto"
              priority
            />
          </div>

          {/* Our Mission */}
          <div id="mission" className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto text-center">
              Enable the proliferation of regulatory disclosure technology in order to help combat climate change and to aid with the eradication of forced labor throughout the world. <span className="font-gelasio">ECKSBEE</span> is the powerhouse behind many bleeding-edge XBRL technologies. Extremely devoted to the cause for the planet&apos;s sustainability and human dignity, look no further for here is <span className="font-gelasio">ECKSBEE</span>.
            </p>
          </div>

          {/* What Is XBRL */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">What Is XBRL</h3>
            <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto text-center space-y-4">
              <p>XBRL (eXtensible Business Reporting Language) has a history that dates back to the late 1990s with the development of the eXtensible Markup Language (XML). XML was designed to enable the exchange of structured data on the web. Its simplicity and ability to encode information in a machine-readable format caught the attention of the business community who was faced with the growing challenge of managing complex financial and business data. However, while XML enabled the exchange of data, there was no standardized way to tag financial data, meaning that data was often encoded in different formats and with different meanings.</p>

              <p>In 1998, a group of financial professionals and technical experts met at the American Institute of Certified Public Accountants (AICPA) to address these challenges. The group recognized the need for a standard language to tag financial data and make it more easily accessible and usable. The working group started experimenting with XML tags and developed a set of taxonomies for financial information, which laid the foundation for what would eventually become XBRL.</p>

              <p>In 2000, the group formed the XBRL International consortium, a not-for-profit organization aimed at promoting the adoption of XBRL as a standard format for business reporting. The consortium was made up of members from various backgrounds, including accounting, finance, information technology, and regulatory bodies.</p>

              <p>In the early years, the focus of XBRL was on the development of the technical specifications and the creation of taxonomies for different sectors such as banking, insurance, and finance. The goal was to develop a standardized language that could be used across different jurisdictions and systems, reducing the cost and complexity of financial reporting.</p>

              <p>As XBRL gained traction, it began to gain support from the regulatory bodies in different countries. In 2005, the US Securities and Exchange Commission (SEC) issued a rule requiring companies to submit their financial information in XBRL format, making it the first regulator to mandate the use of XBRL. This move was significant in the advancement of XBRL as it provided significant legitimacy and validation to the format.</p>

              <p>In the years that followed, other regulatory bodies around the world followed suit, recognizing the benefits of standardizing financial reporting using XBRL. In Europe, the European Securities and Markets Authority (ESMA) has played a leading role in promoting XBRL, mandating its use in financial reporting across the European Union.</p>

              <p>XBRL (eXtensible Business Reporting Language) is an open standard language used for the electronic communication of business and financial data. It is designed to facilitate the exchange and analysis of financial information across different platforms and countries. XBRL uses a standardized set of tags to identify and describe financial data, making it easier for companies to share and compare financial information across different reporting systems. The use of XBRL for financial reporting is becoming increasingly popular and is now supported by many regulatory bodies around the world.</p>

              <p>The use of XBRL has expanded beyond the regulatory sphere to cover other aspects of business reporting such as sustainability reporting. Many companies are now using XBRL to report on their environmental, social, and governance (ESG) performance, allowing them to present their sustainability data in a standardized and transparent format.</p>

              <p>The evolution of XBRL technology has also been significant. Initially, most XBRL tools were custom-built solutions that required a high level of technical expertise to implement. However, with the growth in XBRL adoption, the market for XBRL tools has expanded, and simpler, user-friendly solutions have emerged. Nowadays, XBRL-enabled software is widely available, making it easy for companies to create, manage, and publish XBRL reports. In recent years, there has also been a push towards developing a more advanced version of XBRL, known as Inline XBRL (iXBRL). iXBRL integrates human-readable text with machine-readable data, making XBRL reports more accessible to humans and systems alike. This new version of XBRL will likely become more widespread in the coming years, further expanding its use in financial and business reporting.</p>

              <p>In conclusion, XBRL has come a long way since its inception in the late 1990s. Its success in standardizing financial reporting across different systems and jurisdictions has been remarkable, and its use continues to grow. With the development of new technologies and the increasing demand for greater transparency and accountability in business reporting, it is likely that XBRL will continue to evolve to meet the changing needs of the business community.</p>
            </div>
          </div>

          {/* TeleFacts */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">TeleFacts</h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm">
                <h1 className="text-2xl font-bold mb-4">TeleFacts</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  TeleFacts is a golang module used to build bleeding-edge XBRL technologies.
                </p>
                <Image
                  src="/hypercube.svg"
                  alt="hypercube or tesseract"
                  height={400}
                  width={400}
                  className="mx-auto mb-6"
                />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  When TeleFacts was created, the main goals were:
                </p>
                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                  <li>XBRL rendering</li>
                  <li>XBRL validation</li>
                </ol>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Currently, TeleFacts can be deployed with &quot;goldlord-midas&quot; (a solidjs web app) to render XBRL reports with the following XBRL specification compliance:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                  <li>XBRL 2.1 with no support for the following:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>tuples</li>
                      <li>precision</li>
                      <li>general-special arc role</li>
                      <li>essence-alias arc role</li>
                      <li>similar-tuples arc role</li>
                      <li>requires-element arc role</li>
                    </ul>
                  </li>
                  <li>XBRL Dimensions 1.0 (including typedMember and nested hypercubes)</li>
                  <li>Inline XBRL 1.1 with support limited to the following elements:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>nonFraction</li>
                      <li>nonNumeric</li>
                      <li>continuation</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Releases can be found in the following locations:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                  <li><a href='https://github.com/ecksbee/telefacts/releases' target='_blank' rel='noopener noreferrer' className='underline hover:opacity-70'>TeleFacts</a></li>
                  <li><a href='https://github.com/ecksbee/goldlord-midas' target='_blank' rel='noopener noreferrer' className='underline hover:opacity-70'>goldlord-midas</a></li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400">
                  If there is feedback or request for support, send them via email: <a href='mailto:contact@ecksbee.com' className='underline hover:opacity-70'>contact@ecksbee.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Interested in partnering with us or learning more about our initiatives? We would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@ecksbee.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background transition-colors hover:opacity-80 font-medium"
            >
              Contact Us
            </a>
            <a
              href="https://github.com/ecksbee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] font-medium"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="ECKSBEE FOUNDATION Logo"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
             <span className="text-sm font-medium">
              <span className="font-gelasio">ECKSBEE FOUNDATION</span>
            </span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-gelasio">ECKSBEE FOUNDATION</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

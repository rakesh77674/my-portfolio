const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Want to work together? Send me a message and I&apos;ll get back to you soon.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;

export default function FAQ() {
    return (
      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">What is this app?</h3>
              <p>A cool landing page built with Vite and React!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How does it work?</h3>
              <p>It’s simple—just explore and enjoy!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
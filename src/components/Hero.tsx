export default function Hero() {
    return (
      <section id="hero" className="h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}>
        <div className="container mx-auto h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
            <p className="text-xl">Discover something amazing today!</p>
          </div>
        </div>
      </section>
    );
  }
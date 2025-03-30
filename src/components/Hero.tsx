import BackgroundPaths from '../components/kokonutui/background-paths'

export default function Hero() {
    return (
      <section id="hero" className="lg:h-screen bg-cover bg-center mt-2 lg:mt-0">
        <div className='relative flex items-center justify-center h-full lg:mx-10 mx-2 rounded-3xl' style={{ background: "radial-gradient(52.6% 100% at 50% 100%, #f7f4f3 0%, rgba(247, 244, 243, .88) 100%)" }}>
          <BackgroundPaths/>
        </div>
      </section>
    );
  }
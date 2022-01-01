import Reveal, { RevealCore } from './components/Reveal';

const Home = () => (
  <div>
    <Reveal
      className="min-h-screen overflow-hidden"
      effect={['animate-fadeInLeftBig', 'animate-fadeInRightBig']}
    >
      <div className="h-80 w-full grid place-items-center text-9xl">Hey</div>
      <div className="h-80 w-full grid place-items-center text-9xl">There</div>
    </Reveal>

    <Reveal as="section" effect={['animate-fadeInUpBig']} id="test">
      <div className="p-10 w-full grid place-items-center text-9xl">Foo</div>
      <div className="p-10 w-full grid place-items-center text-9xl">Bar</div>
      <div className="p-10 w-full grid place-items-center text-9xl">Baz</div>
    </Reveal>

    <div className="overflow-hidden">
      <RevealCore className="animate-tada">
        <div className="h-screen w-full grid place-items-center text-9xl">Hello!</div>
      </RevealCore>
    </div>
  </div>
);

export default Home;

import cowsay from 'cowsay-browser';
import Index from '../components/organisms/Header';

function CowsayHi() {
  return <div>
    <Index/>
    <pre>{cowsay.say({ text: 'hi there!' })}</pre>;
  </div>
}

export default CowsayHi;

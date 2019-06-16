import cowsay from 'cowsay-browser';
import Header from '../components/header';

function CowsayHi() {
  return <div>
    <Header/>
    <pre>{cowsay.say({ text: 'hi there!' })}</pre>;
  </div>
}

export default CowsayHi;

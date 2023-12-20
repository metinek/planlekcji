import './App.css';
import Naglowek from './Naglowek';
import Lekcja from './Lekcja';


const pon = [
{nr : 1, godzina : "8:00-8:45", nazwa : "PAD 2/2 KM 506"},
{nr : 2, godzina : "8:50-9:35", nazwa : "j.angielski-Ja1 GM 003"},
{nr : 3, godzina : "9:40-10:25", nazwa : "matematyka BW 211"},
{nr : 4, godzina : "10:45-11:30", nazwa : "PAWEB-1/2 MA 213"},
{nr : 5, godzina : "11:35-12:20", nazwa : "PrAD-1/2 MA 213"},
{nr : 6, godzina : "12:25-13:10", nazwa : "PrAD-1/2 MA 213"},
{nr : 7, godzina : "13:15-14:00", nazwa : "PrAD-1/2 MA 213"},
{nr : 8, godzina : "14:05-14:50", nazwa : "fizyka RJ 420"},
{nr : 9, godzina : "14:55-15:40", nazwa : "PAD-1/2 MA 213"}
];

const wtorek = [
  {nazwa : "PAD 2/2 KM 506"},
  ];

function App() {
  return (
    <div className='app'>
      <h1>Plan lekcji 4M</h1>
      <table>
        <Naglowek />
        {pon.map((p)=>(<Lekcja key={p.nr} nr={p.nr} godzina={p.godzina} nazwa={p.nazwa}/>))}
      </table>
      <table>
        
      </table>
    </div>
  );
}
export default App;

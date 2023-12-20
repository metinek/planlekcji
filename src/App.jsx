import './App.css';
import Naglowek from './Naglowek';
import Lekcja from './Lekcja';
import Lekcja2 from './Lekcja2';


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
{nr: 1, nazwa : "wf-2/2 ZI sg4"},
{nr: 2, nazwa : "j.angielski-Ja1 GM 003"},
{nr: 3, nazwa : "wos MS 202"},
{nr: 4, nazwa : "R/E-rel KP 412"},
{nr: 5, nazwa : "PrAM-1/2 MA 213"},
{nr: 6, nazwa : "PrAM-1/2 MA 213"},
{nr: 7,nazwa : "r_matematyka BW 514"},
{nr: 8,nazwa : ""},
{nr: 9,nazwa : ""}
];

const sroda = [
{nr: 1, nazwa : "PAD-1/2 MA 213"},
{nr: 2, nazwa : "TiDA-1/2 MA 213"},
{nr: 3, nazwa : "PrTiDA-1/2 MA 213"},
{nr: 4, nazwa : "J.POL AB 212"},
{nr: 5, nazwa : "wf-1/2 WB"},
{nr: 6, nazwa : "j.niemiecki-Jn1 AL 205"},
{nr: 7, nazwa : "chemia KT 212"},
{nr: 8, nazwa : "zaj. wych. BA 402"},
{nr: 9, nazwa : ""}
];

const czwartek = [
{nr: 1, nazwa : "PrAWEB-1/2 MA 213"},
{nr: 2, nazwa : "PrAWEB-1/2 MA 213"},
{nr: 3, nazwa : "r_angielski-Ja1 GM 003"},
{nr: 4, nazwa : "J.POL AB 212"},
{nr: 5, nazwa : "matematyka BW 514"},
{nr: 6, nazwa : "r_matematyka BW 514"},
{nr: 7, nazwa : "historia EB 407"},
{nr: 8, nazwa : "wf-1/2 WB sg7"},
{nr: 9, nazwa : ""}
];

const piatek = [
{nr: 1, nazwa : "biologia MŁ 411"},
{nr: 2, nazwa : "j.angielski-Ja1 GM 003"},
{nr: 3, nazwa : "matematyka BW 514"},
{nr: 4, nazwa : "J.POL AB 212"},
{nr: 5, nazwa : "geografia BA 402"},
{nr: 6, nazwa : "wf-1/2 WB sg4"},
{nr: 7, nazwa : "PAM-1/2 MA 213"},
{nr: 8, nazwa : "R/E-rel KP 105"},
{nr: 9, nazwa : ""}
];






function App() {
  return (
    <div className='app'>
      <h1>Plan lekcji 4M</h1>
      <div className='tabele'>

        <div className='tabela'>
          <table>
            <Naglowek />
            {pon.map((p)=>(<Lekcja key={p.nr} nr={p.nr} godzina={p.godzina} nazwa={p.nazwa}/>))}
          </table>
        </div>

        <div className='tabela'>
          <table>
            <tr><th>Wtorek</th></tr>
            {wtorek.map((w)=>(<Lekcja2 key={"wtorek"+w.nr} nazwa={w.nazwa}/>))}
          </table>
        </div>

        <div className='tabela'>
          <table>
            <tr><th>Środa</th></tr>
            {sroda.map((s)=>(<Lekcja2 key={"sroda"+s.nr} nazwa={s.nazwa}/>))}
          </table>
        </div>

        <div className='tabela'>
          <table>
            <tr><th>Czwartek</th></tr>
            {czwartek.map((c)=>(<Lekcja2 key={"czwartek"+c.nr} nazwa={c.nazwa}/>))}
          </table>
        </div>

        <div className='tabela'>
          <table>
            <tr><th>Piątek</th></tr>
            {piatek.map((p)=>(<Lekcja2 key={"piatek"+p.nr} nazwa={p.nazwa}/>))}
          </table>
        </div>


      </div>
    </div>
  );
}
export default App;

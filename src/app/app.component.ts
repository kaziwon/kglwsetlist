import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "teste";

  searchSong: string = '';
  songs: any[] = [];
  filteredSongs: any[] = [];
  showTitle: string = "SAO PAULO 2024";

  cardbackgroundColor: string = '#EED01C';
  cardHeaderbackgroundColor: string = '#FE0100';
  backgroundColor: string = '#000000';
  headerFontColor: string = '#000000';
  corpoFontColor: string = '#000000';
  borderColor: string = '#000000';

  titleFont = 'Helvetica';
  songsFont = 'Helvetica';

  selectedSongs: any = [];

  logos: any = [
    {
      "path": "assets/logos/logo_red_yellow.png",
      "description": "King Gizzard Red/Yellow"
    },
    {
      "path": "assets/logos/logo_angry_gator_done.png",
      "description": "Angry Gator"
    },
    {
      "path": "assets/logos/logo_branco_done.png",
      "description": "King Gizzard White"
    },
    {
      "path": "assets/logos/logo_cinzavermelho_done.png",
      "description": "King Gizzard Grey/Red"
    },
    {
      "path": "assets/logos/logo_mindfuzz_done.png",
      "description": "Mindfuzz"
    },
    {
      "path": "assets/logos/logo_nonagon_done.png",
      "description": "Logo Nonagon"
    },
    {
      "path": "assets/logos/logo_papermache_done.png",
      "description": "King Gizzard Paper Mache"
    },
    {
      "path": "assets/logos/logo_red_done.png",
      "description": "King Gizzard Red"
    },
    {
      "path": "assets/logos/logo_trans_done.png",
      "description": "King Gizzard Trans"
    },
    {
      "path": "assets/logos/logo_willou_done.png",
      "description": "King Gizzard Willoughby's Beach"
    },
    {
      "path": "assets/logos/logo_yellow_done.png",
      "description": "King Gizzard Yellow"
    }
  ]
  selectedLogo = this.logos[0].path;

  clickedToFinalize = false;

  private totalSeconds: number = 0; // Acumula o tempo em segundos
  private readonly maxSeconds: number = 3 * 60 * 60; // 3 horas em segundos


  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(`
((((((((((((((/(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((/(
(/(((/((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
/(((((((((/((((((((((/((((((((((((((((((((((((((((((((((((((((((((((((((((((((((
(((/(((((((((((((((((((((((((/(///(((((((#(((/((((((((((((((((((((((((((((((((((
((((((((((((((((((((/(((((##%##########%#########%###(/(((((((((((((((((((((((((
/(/((((//(((((((((((#%####%%%%#%%##%%%%#%%%%#%%#####%###%(((((((((((((((((((((((
(((((((((((((((((/####%%#%#%#%%%%#####%####%%####%%########(((((((((/(((((((((((
(((((((((((((((/(###%%##%%%%%%%%%%%%%%%%%%%%%%%%%%#%%##%###%##((((((((((((((((((
(/(((((((((((((/#####%%%%%%%####%%#%%%%%%%#%##%%%%%%%%%%%#%%%##(((((((((((((((((
((((((((/((((((#%%#%%%%%#%%%%#%###%#%####%####%%%%%##%%%%&%%%%%#/(((((((((((((((
((((((((((/(((#%#%%%%%%%#%%%%%#%##%%%%###%%%#%%%%%%%##%%#%###%%%#(/(((((((((((((
((((((((((((##%%%%%#%####%%%/((((*%(/&/(((%#///(#%(%%#%%%%%%%####%//((((((((/(((
((((((((((/%%%#%#%###%(%((((/#**//%/(((((/&&((&((#(%(((%%#%#%#%%##%#(/((((((((((
(((((((((%#%%%###%%(#((#/(((*######&#*/#%#(/((((#%&////*(((%%##%##%%#%(((((((/((
((((/(#######%%&&###/((#(((#(((/(*###(((&/*(((&#((*#(&(%//##%&&&%%%#%####(((((((
((((#####%%%%&#*/*/(***///,***////((/(###(#%%####%#%%%%#%%%&%%@&&&&&%#%%####((((
((##%##%%&&&#(((//(//(///(/(/(/(((((((((((////(/////((//(/(/(/((/*(*/&%%#%%##(((
(###%#&&&&&&/*((/(//((*(%&%,((((/(((((/(/////////(///(/**//((/(((///,&&&&%####((
(#####&%%%&&(//(/(((*@#(#((#&*(((((((((((/(/////(//((%#((#&,///((((/*&%&%&%#%#/(
((####%%%%&%/(/(/(((/&(#(((#%*(((((((((///(////(////%(((((#%*(////(/,&&&%%%##%/(
//(#####%%&&*////((((*@%#%&%*((((/(((////(///(((////&(((((#(/(/((((/,&&%%%###(((
(((((######%#(////(/(/(///(//((/(//((///((//(((///(/((//**(((((/(/((*&&%%##%/(((
((((((/(####%#(((##(#((#((((#(((((#(((((///(/////(//(/((((/(((////##*&&##%((((((
(((((((((/####%%%(((%%%%%%#%&*****//*/*/***/*//((((#%%%%%%%#%#%##&%%&%###(((((((
(((((((((((((%%#%%##,/##&%&&&#%&%&%&%%%%#&%%%%%#%%##&&%&%%(#%#/#&&%##%#(((((((((
((((((((((((((((#####%#%#&&&/////////////((////////(%%%%***/#%&%##((((((((((((((
(((((((((((((((((((((####%&&%%%%%&%&%&%&&&&%&%%%%%%#%%#%%&&/%###/(((((((((((((((
((((((((((((((((((((((###&&&/////////**//*///*/////&%(((/#((((((((/(((((((((((((
((((((((((((((((((((((((*%%%%*///**///////(///(///(%&&,%/(((((((((((((((((((((((
(((((((((((((((((((((((((((/&%%%%%((((##((#((/((#((%(//(((((((((((((((((((((((((
((((((((((((((((((((((((((((((((/((%(#%((((/%/((//(((((((((((((((((((/((((((((((
(((((/(#####((((((((/((((((((((((((//%#(((#(&(/((((((((((((//((//(/(((/(((((((((
      `);
    console.log(" %c HAN-TYUMI, THE CONFUSED CYBORG WAS HERE", 'background: #222; color: #1aff00');
    this.http.get('/assets/songs.json').subscribe((response: any) => {
      this.songs = response;
    });
  }

  filterSongs() {
    if (!this.searchSong || this.searchSong === '') {
      this.filteredSongs = [];
    } else {
      this.filteredSongs = this.songs.filter(song =>
        song['Title'].toLowerCase().includes(this.searchSong.toLowerCase())
      );
    }

  }

  savePoster() {
    const posterElement = document.querySelector("#poster") as HTMLCanvasElement;
    if (posterElement) {
      html2canvas(posterElement).then(canvas => {
        const imageData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.setAttribute("download", "setlistkglw.png");
        link.setAttribute("href", imageData);
        link.click();
      });
    } else {
      console.error("Elemento #poster não encontrado");
    }
  }
  capturarPoster() {
    const excluirMusic = document.getElementById("excluirMusic");

    if (excluirMusic) {

      excluirMusic.style.display = "none";
    }
    const posterElement = document.querySelector("#poster") as HTMLCanvasElement;
    if (posterElement) {
      html2canvas(posterElement).then(canvas => {
        var bodyImg = document.querySelector("#bodyImg")?.childElementCount;

        if (bodyImg == 0) {
          document.querySelector("#bodyImg")?.appendChild(canvas);
        } else {
          document.querySelector("#bodyImg")?.childNodes[0].replaceWith(canvas);
        }

      });
    } else {
      console.error("Elemento #poster não encontrado");
    }
  }

  colorChanged() {

    document.documentElement.style.setProperty('--card-background-color', this.cardbackgroundColor);

    document.documentElement.style.setProperty('--card-header-background-color', this.cardHeaderbackgroundColor);

    document.documentElement.style.setProperty('--background-color', this.backgroundColor);

    document.documentElement.style.setProperty('--header-font-color', this.headerFontColor);

    document.documentElement.style.setProperty('--corpo-font-color', this.corpoFontColor);

    document.documentElement.style.setProperty('--border-color', this.borderColor);

  }

  removeSong(song: any) {

    const index = this.selectedSongs.indexOf(song);
    if (index > -1) {
      this.selectedSongs.splice(index, 1);
      this.totalSeconds -= song['Length'];
      this.recalculateTime();
    }
  }

  recalculateTime() {
    this.totalSeconds = 0;

    this.selectedSongs.forEach((song: any) => {
      var selectedSong = this.songs.find(obj => obj.Title == song);
      this.addTime(selectedSong['Length'], song, false);
    });
  }

  fontChanged() {
    document.documentElement.style.setProperty('--title-font', this.titleFont);
    document.documentElement.style.setProperty('--songs-font', this.songsFont);
  }

  selectSong(song: any) {
    const excluirMusic = document.getElementById("excluirMusic");
    if (excluirMusic) {
      excluirMusic.style.display = "block";
    }
    this.addTime(song['Length'], song);
    this.filteredSongs = []; // Fecha a lista ao selecionar uma opção
  }

  // Função para adicionar tempo
  addTime(timeString: string, song: any, newSong: boolean = true): void {
    console.log(timeString, song);
    const [minutes, seconds] = timeString.split(':').map(Number);
    const timeToAdd = minutes * 60 + seconds;

    // Verifica se adicionar o novo tempo ultrapassa 3 horas
    if (this.totalSeconds + timeToAdd > this.maxSeconds) {
      alert('You can only add up to 3 hours of show time!!!!');
    } else {
      if (this.checkIfSongIsAlreadySelected(song)) {
        alert('Song already selected');
      } else {
        if (newSong) this.selectedSongs.push(song.Title);
        this.totalSeconds += timeToAdd;
      }


    }
  }

  logoChanged() {
    console.log(this.selectedLogo);
  }

  checkIfSongIsAlreadySelected(song: any): boolean {
    return this.selectedSongs.includes(song.Title);
  }

  getFormattedTime(): string {
    const hours = Math.floor(this.totalSeconds / 3600);
    const minutes = Math.floor((this.totalSeconds % 3600) / 60);
    const seconds = this.totalSeconds % 60;

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}



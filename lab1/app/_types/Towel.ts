export class Towel {
  color: string;
  length: number;
  image: string;
  wet: boolean = false;

  constructor(color: string, length: number, image: string) {
    this.color = color;
    this.length = length;
    this.image = image;
  }

  use(): string {
    if (!this.wet) {
      return "La cible est maintenant sèche.";
    } else {
      return "Ça ne fonctionne pas...";
    }
  }
}
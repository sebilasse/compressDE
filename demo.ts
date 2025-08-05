import { compressDE, expandDE } from './lexica/DE.ts';

const input = `Star-Koch Alfons Schuhbeck ist wegen Insolvenzverschleppung und Corona-Betrugs zu vier Jahren und drei Monaten Haft verurteilt worden. Ob er die Strafe antreten muss, ist noch offen.
Im Prozess gegen Alfons Schuhbeck wegen Insolvenzverschleppung und Betrugs mit Coronahilfen hat das Landgericht München I den Star-Koch unter anderem wegen Insolvenzverschleppung und Betrugs verurteilt. Es verhängte eine Gesamtfreiheitsstrafe von vier Jahren und drei Monaten.
Nach Überzeugung des Gerichts waren die von Schuhbeck geführten gastronomischen Betriebe bereits seit längerer Zeit pleite, dieser betrieb seine Geschäfte aber dennoch fort. Dadurch verloren zahlreiche Gläubiger viel Geld. »Letztendlich sind Sie zu groß geworden«, sagte Richter Uwe Habereder an den 76-Jährigen gerichtet. Schuhbeck habe seine »Firmen auf eine Art und Weise betrieben, wie es sich für einen Geschäftsmann zumindest nicht gehört«.
Die Staatsanwaltschaft hatte in ihrem Plädoyer eine Gesamtfreiheitsstrafe von vier Jahren und sieben Monaten für den 76-Jährigen gefordert – unter anderem wegen vorsätzlicher Insolvenzverschleppung, Betrugs, Subventionsbetrugs und vorsätzlichen Bankrotts.
Das Firmenimperium, das er aufgebaut hatte, sei ihm »leider Gottes über den Kopf gewachsen«, sagte die Staatsanwältin. Er habe aber auch »aus grobem Eigennutz« gehandelt. Besonders verwerflich sei es, dass Schuhbeck die »beispiellose nationale Notlage in der Pandemie« ausgenutzt habe. Schuhbeck habe viel zu lange versucht, »das Lebenswerk und den Schein aufrechtzuerhalten«.
In die Strafforderung eingerechnet ist auch schon die Strafe wegen Steuerhinterziehung, die Schuhbeck eigentlich derzeit im Gefängnis absitzen müsste. Bereits im Jahr 2022 hatte das Landgericht München I Schuhbeck wegen Steuerhinterziehung zu drei Jahren und zwei Monaten Haft verurteilt. Der frühere Koch des FC Bayern München und Gastgeber zahlreicher Prominenter hatte immer wieder Geld aus den Kassen von zwei Restaurants entnommen, ohne dies zu versteuern.
Der Vollzug der Haftstrafe ist allerdings derzeit ausgesetzt, weil Schuhbeck schwer erkrankt ist und außerhalb des Gefängnisses behandelt wird.
Schuhbeck hatte die Vorwürfe im neuen Prozess gegen ihn eingeräumt und zugegeben, schon lange vor der offiziellen Insolvenz von den massiven finanziellen Problemen seiner Firmen gewusst und dennoch rechtswidrig Coronahilfe beantragt zu haben.
Geständnis als Teil eines Deals
Sein Geständnis war Teil eines sogenannten Deals, in dessen Rahmen Staatsanwaltschaft und Verteidigung sich mit dem Gericht auf einen Strafrahmen von zwischen vier Jahren bis vier Jahren und acht Monaten geeinigt hatten. Schuhbecks Verteidiger Norbert Scharf betonte die Kooperation des Angeklagten und dass es auch darum aus seiner Sicht möglich wäre, »am unteren Rahmen« der Vereinbarung zu bleiben.
Sein zweiter Anwalt Joachim Eckert betonte Schuhbecks »eisernen Willen« sowie »die Bereitschaft, immer zu arbeiten«. Heute mache er den »Eindruck eines gebrochenen, alten kranken Mannes«. »Über Jahre hinweg hat er mit seinem Kochen, seinen Shows im Zelt oder im Fernsehen den Leuten glückliche Stunden beschert – und ich denke, das wird auch bleiben.«
Schuhbecks Firmen haben einen riesigen Schuldenberg hinterlassen: Gläubiger fordern nach Angaben des Insolvenzverwalters Max Liebig laut aktuellem Stand insgesamt 27 Millionen Euro. Seiner Einschätzung nach wird nur ein Bruchteil davon bei Abschluss der verschiedenen Insolvenzverfahren zurückgezahlt werden können. `;
const startCompress = performance.now();
const compressed = compressDE(input);
const endCompress = performance.now();

const startExpand = performance.now();
const expanded = expandDE(compressed);
const endExpand = performance.now();

const C = Array.from(compressed);
const [rawSize, compressedSize] = [new Blob([input]).size, compressed.length];
console.log('compressed array', JSON.stringify(C));
console.log(' '); console.log('DE >');
console.log('Size of input:     ', rawSize, 'byte');
console.log('Size of compressed:', compressedSize, 'byte');
console.log('...');
console.log('Relative Size:', (compressedSize*100)/rawSize, '%');
console.log(' ');
console.log(input === expanded 
  ? 'OK! The expanded text matches the input' 
  : 'FAIL !!! Expanded text DOES NOT match the input.'
);
console.log('...'); console.log(' ');
console.log('Compressed in', Math.round(endCompress-startCompress), 'ms');
console.log('Expanded in', Math.round(endExpand-startExpand), 'ms');

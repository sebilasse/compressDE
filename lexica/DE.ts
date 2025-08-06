import { DE_COMPRESS, DE_EXPAND } from './DE1.ts';
import { DE_COMPRESS2, DE_EXPAND2 } from './DE2.ts';
import { DE_COMPRESS3, DE_EXPAND3 } from './DE3.ts';
import { DE_COMPRESS4, DE_EXPAND4 } from './DE4.ts';
import { DE_COMPRESS_MULTI_KEYS, DE_EXPAND_MULTI } from './DE_MULTI.ts';

enum _DE {
  /* COMES FROM DE_COMPRESS._ : */
  WORD0 = 0,
  WORD1 = 1,
  WORD2 = 2,
  CHARACTER_WORD = 3,
  POS_TABLE_NO_SPACE_BEFORE = 4,
  EXT_CHAR_TABLE = 5,
  TABLE_RANGE_SWITCH_1 = 6,
  TABLE_RANGE_SWITCH_2 = 7,
  TABLE_RANGE_SWITCH_3 = 8,
  NO_SPACE_NEXT = 9,
  CASE_SWITCH_NEXT = 10,
  DELETE_LAST2 = 11,
  DELETE_LAST = 12,
  UPPER_nis = 13,
  UPPER_REPLACE_en_ung = 14,
  UPPER_REPLACE_en_barkeit = 15,
  LOWER_REPLACE_en_bar = 16,
  UPPER_DELETE_n = 17,
  MULTI_TABLE = 18,
  MULTI = 19,
  /* <-- */
  sch = 20,
  _er = 21,
  ei = 22,
  de = 23,
  nd = 24,
  te = 25,
  _in = 26,
  ie = 27,
  _es = 28,
  ge = 29,
  ne = 30,
  un = 31,
  ic = 32,
  se = 33,
  be = 34,
  he = 35,
  st = 36,
  re = 37,
  _an = 38,
  rn = 39,
  rt = 40,
  ln = 41,
  lt = 42,
  ig = 43,
  ik = 44,
  as = 45,
  ' ' = 46,
  '.' = 47,
  ',' = 48,
  ':' = 49,
  '\n' = 50,
  e = 51,
  n = 52,
  i = 53,
  r = 54,
  t = 55,
  s = 56,
  a = 57,
  d = 58,
  h = 59,
  u = 60,
  l = 61,
  g = 62,
  o = 63,
  c = 64,
  m = 65, // !!! WORDS ::
  der = 66,
  die = 67,
  und = 68,
  in = 69,
  den = 70,
  von = 71,
  zu = 72,
  das = 73,
  mit = 74,
  im = 75,
  'für' = 76,
  auf = 77,
  sich = 78,
  sie = 79,
  ist = 80,
  dem = 81,
  es = 82,
  ein = 83,
  so = 84,
  des = 85,
  er = 86,
  dass = 87, 
  nicht = 88,
  am = 89,
  ich = 90, // wurde
  eine = 91, // werden !
  um = 92,
  an = 93,
  auch = 94,
  nach = 95,
  du = 96,
  ob = 97,
  wo = 98,
  als = 99
  /*
  3WORD_OR_2WORD! // 100
  Vornamen // 101
  Eigennamen // 102
  Ortsnamen // 103 */
}

enum DE_MULTI {
  'bei der' = 0,
  'gibt es' = 1,
  'Bei der' = 2,
  'mit einem' = 3,
  'aus dem' = 4,
  'über die' = 5,
  'mehr als' = 6,
  'nicht nur' = 7,
  'in einem' = 8,
  'bei den' = 9,
  'vor allem' = 10,
  'Bei den' = 11,
  'nicht mehr' = 12,
  'aus der' = 13,
  'in einer' = 14,
  'mit einer' = 15,
  '– und' = 16,
  'unter anderem' = 17,
  'zu einem' = 18,
  'vor dem' = 19,
  'gab es' = 20,
  'durch die' = 21,
  'hat sich' = 22,
  'gegen die' = 23,
  'in diesem' = 24,
  'sind die' = 25,
  'geht es' = 26,
  'Bei einem' = 27,
  'hat die' = 28,
  'in Deutschland' = 29,
  'aber auch' = 30,
  'wie die' = 31,
  'bis zu' = 32,
  'vor der' = 33,
  'Auch wenn' = 34,
  'über den' = 35,
  'Aber auch' = 36,
  'Am Ende' = 37,
  'Darüber hinaus' = 38,
  'noch nicht' = 39,
  'zu einer' = 40,
  'gegen den' = 41,
  'Das war' = 42,
  'werden. Das' = 43,
  'im Jahr' = 44,
  'Denn die' = 45,
  'von einem' = 46,
  'immer wieder' = 47,
  'man sich' = 48,
  'Das hat' = 49,
  'Bei dem' = 50,
  'bei dem' = 51,
  'wird die' = 52,
  'aber nicht' = 53,
  'der Stadt' = 54,
  'kann man' = 55,
  'die beiden' = 56,
  'sondern auch' = 57,
  'haben wir' = 58,
  'bis zum' = 59,
  'Bei einer' = 60,
  'Prozent der' = 61,
  'bei einem' = 62,
  'wird es' = 63,
  'Das sind' = 64,
  'handelt es' = 65,
  'Das Unternehmen' = 66,
  'handelt es sich' = 67,
  'für einen' = 68,
  'war der' = 69,
  'Millionen Euro' = 70,
  'war die' = 71,
  'am Dienstag' = 72,
  'am Freitag' = 73,
  'hat der' = 74,
  'zum Beispiel' = 75,
  'in dieser' = 76,
  'kam es' = 77,
  'haben die' = 78,
  'auf einen' = 79,
  'Aber es' = 80,
  'werden die' = 81,
  'Das sei' = 82,
  'am Mittwoch' = 83,
  'diesem Jahr' = 84,
  'aus den' = 85,
  'nur noch' = 86,
  'wird der' = 87,
  'gar nicht' = 88,
  'die Stadt' = 89,
  'am Donnerstag' = 90,
  'nach einem' = 91,
  'habe ich' = 92,
  'mit. Das' = 93,
  'heißt es' = 94,
  'Am Sonntag' = 95,
  'durch den' = 96,
  'am Montag' = 97,
  'in diesem Jahr' = 98,
  'rund um' = 99,
  'von einer' = 100,
  'in Richtung' = 101,
  'am Sonntag' = 102,
  'am Samstag' = 103,
  'Am Samstag' = 104,
  'im vergangenen' = 105,
  'den vergangenen' = 106,
  'bei einer' = 107,
  'wie der' = 108,
  'wenn die' = 109,
  'Aber das' = 110,
  'Aber die' = 111,
  'den ersten' = 112,
  'hat er' = 113,
  'war es' = 114,
  'Am Freitag' = 115,
  'sagte der' = 116,
  'mit seinem' = 117,
  'Auch bei' = 118,
  'über das' = 119,
  'wurde der' = 120,
  'hat das' = 121,
  'und damit' = 122,
  'ein paar' = 123,
  '- und' = 124,
  'am Ende' = 125,
  'um einen' = 126,
  'soll es' = 127,
  'wenn es' = 128,
  'dass man' = 129,
  'auf einem' = 130,
  'wenn man' = 131,
  'in den vergangenen' = 132,
  'unter dem' = 133,
  'werden. Auch' = 134,
  'lässt sich' = 135,
  'der ersten' = 136,
  'wurde die' = 137,
  'ist. Das' = 138,
  'handelt es sich um' = 139,
  'sein. Das' = 140,
  'eine neue' = 141,
  'wie es' = 142,
  'war ein' = 143,
  'während der' = 144,
  'haben sich' = 145,
  'wird das' = 146,
  'sei es' = 147,
  'hatte die' = 148,
  'Bis zum' = 149,
  'im Rahmen' = 150,
  'Aufgrund der' = 151,
  'nach einer' = 152,
  'dass wir' = 153,
  'Blick auf' = 154,
  'nur die' = 155,
  'an einem' = 156,
  'in seiner' = 157,
  'auch bei' = 158,
  'worden. Bei' = 159,
  'sich bei' = 160,
  'den letzten' = 161,
  'die neue' = 162,
  'war das' = 163,
  'noch ein' = 164,
  'die Frage,' = 165,
  'Am Mittwoch' = 166,
  'wir uns' = 167,
  'auch noch' = 168,
  'Am Donnerstag' = 169,
  'die Ukraine' = 170,
  'es noch' = 171,
  'an diesem' = 172,
  'Ende der' = 173,
  'Das kann' = 174,
  'sowie die' = 175,
  'Am Dienstag' = 176,
  'im Vergleich' = 177,
  'hat es' = 178,
  'ging es' = 179,
  'das Unternehmen' = 180,
  'Am Montag' = 181,
  'Anders als' = 182,
  'Das geht' = 183,
  'vor Ort' = 184,
  'im Bereich' = 185,
  'einer der' = 186,
  'den USA' = 187,
  'in Berlin' = 188,
  'muss man' = 189,
  'Das wird' = 190,
  'habe er' = 191,
  'der Deutschen' = 192,
  'waren die' = 193,
  'auf einer' = 194,
  'wenn sie' = 195,
  'Das neue' = 196,
  'vergangenen Jahr' = 197,
  'wie das' = 198,
  'kommt es' = 199,
  'und seine' = 200,
  'des Jahres' = 201,
  'noch einmal' = 202,
  'an. Das' = 203,
  'sei die' = 204,
  'im vergangenen Jahr' = 205,
  'Milliarden Euro' = 206,
  'Angesichts der' = 207,
  'verletzt worden.' = 208,
  'der vergangenen' = 209,
  'Dabei handelt es sich' = 210,
  'mit. Das teilte' = 211,
  'nach Angaben' = 212,
  'gemeinsam mit' = 213,
  'in den letzten' = 214,
  'der deutschen' = 215,
  'in den vergangenen Jahren' = 216,
  'verletzt worden. Bei' = 217,
  'zwischen den' = 218,
  'die Menschen' = 219,
  'befindet sich' = 220,
  'Menschen in' = 221,
  'immer noch' = 222,
  'in der Vergangenheit' = 223,
  'verletzt worden. Bei einem' = 224,
  'die meisten' = 225,
  'den vergangenen Jahren' = 226,
  'Borussia Dortmund' = 227,
  'mit seiner' = 228,
  'der anderen Seite' = 229,
  'haben. Das' = 230,
  'hatte sich' = 231,
  'in der Nacht' = 232,
  'Dabei handelt es' = 233,
  'der Region' = 234,
  'daran, dass' = 235,
  'worden. Bei einem' = 236,
  'zusammen mit' = 237,
  'zu sehen.' = 238,
  'in den kommenden' = 239,
  'werden können.' = 240,
  'Menschen, die' = 241,
  'über eine' = 242,
  'teilte die' = 243,
  'Auf der anderen Seite' = 244,
  'Aus diesem Grund' = 245,
  'Angaben zufolge' = 246,
  'Das teilte' = 247,
  'werden. Bei' = 248,
  'Auf die Frage,' = 249,
  'zur Verfügung' = 250,
  'ist, dass' = 251,
  'am Wochenende' = 252,
  'Dazu gehören' = 253,
  'Besucherinnen und Besucher' = 254,
  'nach eigenen Angaben' = 255
}

type NO = {[k: string]: number;}
type NAO = {[k: string]: (number|number[]);}
const DE_COMMON_CHAR: NO = {
  ' ': 46,
  '.': 47,
  ',': 48,
  ':': 49,
  '\n': 50,
  e: 51,
  n: 52,
  i: 53,
  r: 54,
  t: 55,
  s: 56,
  a: 57,
  d: 58,
  h: 59,
  u: 60,
  l: 61,
  g: 62,
  o: 63,
  c: 64,
  m: 65
};

const DE_CHAR_WORD: NO = {
  '...': 3,
  b: 4,
  f: 5,
  k: 6,
  j: 7,
  p: 8,
  q: 9,
  v: 10,
  w: 11,
  x: 12,
  y: 13,
  z: 14,
  A: 15,
  B: 16,
  sch: 17,
  ern: 18,
  cht: 19,
  en: 20,
  er: 21,
  ch: 22,
  ei: 23,
  de: 24,
  nd: 25,
  te: 26,
  in: 27,
  ie: 28,
  es: 29,
  ge: 30,
  ne: 31,
  un: 32,
  ic: 33,
  se: 34,
  be: 35,
  he: 36,
  st: 37,
  re: 38,
  an: 39,
  rn: 40,
  rt: 41,
  ln: 42,
  le: 43,
  lt: 44,
  ig: 45,
  iv: 46,
  ik: 47,
  as: 48,
  is: 49,
  ' ': 50,
  '.': 51,
  ',': 52,
  ':': 53,
  '\n': 54,
  e: 55,
  n: 56,
  i: 57,
  r: 58,
  t: 59,
  s: 60,
  a: 61,
  d: 62,
  h: 63,
  u: 64,
  l: 65,
  g: 66,
  o: 67,
  c: 68,
  m: 69,
  C: 70,
  D: 71,
  E: 72,
  F: 73,
  G: 74,
  H: 75,
  I: 76,
  J: 77,
  K: 78,
  L: 79,
  M: 80,
  N: 81,
  O: 82,
  P: 83,
  Q: 84,
  R: 85,
  S: 86,
  T: 87,
  U: 88,
  V: 89,
  W: 90,
  X: 91,
  Y: 92,
  Z: 93,
  0: 94,
  1: 95,
  2: 96,
  3: 97,
  4: 98,
  5: 99,
  6: 100,
  7: 101,
  8: 102,
  9: 103,
  "ä": 104,
  "ö": 105,
  "ü": 106,
  "ß": 107,
  '"': 108,
  "(": 109,
  ")": 110,
  "Ö": 111,
  "Ü": 112,
  "/": 113,
  "!": 114,
  "Ä": 115,
  "é": 116,
  "'": 117,
  "%": 118,
  ";": 119,
  "&": 120,
  "+": 121,
  "á": 122,
  "…": 123,
  "*": 124,
  "ë": 125,
  "ó": 126,
  "â": 127,
  "è": 128,
  "$": 129,
  "ç": 130,
  "à": 131,
  "É": 132,
  "—": 133,
  "›": 134,
  "´": 135,
  "ã": 136,
  "ø": 137,
  "ê": 138,
  "ý": 139,
  "ï": 140,
  "Á": 141,
  "‒": 142,
  "å": 143,
  "î": 144,
  "Ç": 145,
  "−": 146,
  "Å": 147,
  "<": 148,
  "Ÿ": 149,
  "ð": 150,
  "ò": 151,
  "À": 152,
  "Ø": 153,
  "Ú": 154,
  "Ë": 155,
  "Œ": 156,
  "æ": 157,
  "Ó": 158,
  "õ": 159,
  "Ñ": 160,
  "Í": 161,
  "Þ": 162,
  '\u200B': 163,
  Ã: 164,
  Â: 165,
  Æ: 166,
  Ì: 167,
  Ò: 168,
  Õ: 169,
  È: 170,
  Ê: 171,
  Î: 172,
  Ï: 173,
  Ô: 174,
  Ù: 175,
  Û: 176,
  ì: 177,
  í: 178,
  ô: 179,
  œ: 180,
  ù: 181,
  ú: 182,
  û: 183,
  ñ: 184,
  Ð: 185,
  Ý: 186,
  ÿ: 187,
  þ: 188,
  '-': 189,
  '=': 190,
  '>': 191,
  '?': 192,
  '@': 193,
  '[': 194,
  '\\': 195,
  ']': 196,
  '^': 197,
  '_': 198,
  '`': 199,
  '{': 200,
  '|': 201,
  '}': 202,
  '~': 203,
  '¡': 204,
  '¿': 205,
  '„': 206,
  '“': 207,
  '”': 208,
  '‟': 209,
  '«': 210,
  '»': 211,
  '‘': 212,
  '’': 213,
  '‚': 214,
  '‛': 215,
  '€': 216,
  '¢': 217,
  '£': 218,
  '¥': 219,
  '¤': 220,
  '²': 221,
  '³': 222,
  '°': 223,
  '–': 224,
  '¦': 225,
  '§': 226,
  '¨': 227,
  '©': 228,
  'ª': 229,
  '¬': 230,
  '®': 231,
  '¯': 232,
  '±': 233,
  'µ': 234,
  '¶': 235,
  '·': 236,
  '¹': 237,
  'º': 238,
  '¼': 239,
  '½': 240,
  '¾': 241,
  '×': 242,
  '÷': 243,
  '‣': 244,
  '•': 245
  // TODO 10 missing chars
}

const DE_EXT_CHAR: NO = {
  ' ': 3,
  b: 4,
  f: 5,
  k: 6,
  j: 7,
  p: 8,
  q: 9,
  v: 10,
  w: 11,
  x: 12,
  y: 13,
  z: 14,
  '.': 15,
  ',': 16,
  A: 17,
  B: 18,
  C: 19,
  D: 20,
  E: 21,
  F: 22,
  G: 23,
  H: 24,
  I: 25,
  J: 26,
  K: 27,
  L: 28,
  M: 29,
  N: 30,
  O: 31,
  P: 32,
  Q: 33,
  R: 34,
  S: 35,
  T: 36,
  U: 37,
  V: 38,
  W: 39,
  X: 40,
  Y: 41,
  Z: 42,
  0: 43,
  1: 44,
  2: 45,
  3: 46,
  4: 47,
  5: 48,
  6: 49,
  7: 50,
  8: 51,
  9: 52,
  "ä": 53,
  "-": 54,
  "ö": 55,
  "ß": 56,
  ":": 57,
  '"': 58,
  "(": 59,
  ")": 60,
  "Ö": 61,
  "Ü": 62,
  "/": 63,
  "!": 64,
  "Ä": 65,
  "é": 66,
  "'": 67,
  "%": 68,
  ";": 69,
  "&": 70,
  "+": 71,
  "á": 72,
  "…": 73,
  "*": 74,
  "ë": 75,
  "ó": 76,
  "â": 77,
  "è": 78,
  "$": 79,
  "ç": 80,
  "à": 81,
  "É": 82,
  "—": 83,
  "›": 84,
  "´": 85,
  "ã": 86,
  "ø": 87,
  "ê": 88,
  "ý": 89,
  "ï": 90,
  "Á": 91,
  "‒": 92,
  "å": 93,
  "î": 94,
  "Ç": 95,
  "−": 96,
  "Å": 97,
  "<": 98,
  "Ÿ": 99,
  "ð": 100,
  "ò": 101,
  "À": 102,
  "Ø": 103,
  "Ú": 104,
  "Ë": 105,
  "Œ": 106,
  "æ": 107,
  "Ó": 108,
  "õ": 109,
  "Ñ": 110,
  "Í": 111,
  "Þ": 112,
  '\u200B': 113,
  Ã: 114,
  Â: 115,
  Æ: 116,
  Ì: 117,
  Ò: 118,
  Õ: 119,
  È: 120,
  Ê: 121,
  Î: 122,
  Ï: 123,
  Ô: 124,
  Ù: 125,
  Û: 126,
  ì: 127,
  í: 128,
  ô: 129,
  œ: 130,
  ù: 131,
  ú: 132,
  û: 133,
  ü: 134,
  ñ: 135,
  Ð: 136,
  Ý: 137,
  ÿ: 138,
  þ: 139,
  '=': 140,
  '>': 141,
  '?': 142,
  '@': 143,
  '[': 144,
  '\\': 145,
  ']': 146,
  '^': 147,
  '_': 148,
  '`': 149,
  '{': 150,
  '|': 151,
  '}': 152,
  '~': 153,
  '¡': 154,
  '¿': 155,
  '„': 156,
  '“': 157,
  '”': 158,
  '‟': 159,
  '«': 160,
  '»': 161,
  '‘': 162,
  '’': 163,
  '‚': 164,
  '‛': 165,
  '€': 166,
  '¢': 167,
  '£': 168,
  '¥': 169,
  '¤': 170,
  '²': 171,
  '³': 172,
  '°': 173,
  '–': 174,
  '¦': 175,
  '§': 176,
  '¨': 177,
  '©': 178,
  'ª': 179,
  '¬': 180,
  '®': 181,
  '¯': 182,
  '±': 183,
  'µ': 184,
  '¶': 185,
  '·': 186,
  '¹': 187,
  'º': 188,
  '¼': 189,
  '½': 190,
  '¾': 191,
  '×': 192,
  '÷': 193,
  '‣': 194,
  '•': 195,
  '\t': 196
  // TODO missing chars
}

const DE_COMMON_POS: NO = {
  sch: 20,
  er: 21,
  ei: 22,
  de: 23,
  nd: 24,
  te: 25,
  in: 26,
  ie: 27,
  es: 28,
  ge: 29,
  ne: 30,
  un: 31,
  ic: 32,
  se: 33,
  be: 34,
  he: 35,
  st: 36,
  re: 37,
  an: 38,
  rn: 39,
  rt: 40,
  ln: 41,
  lt: 42,
  ig: 43,
  ik: 44,
  as: 45
}

const DE_EXT_POS: NO = {
  'er*innen': 0,
  'er*in': 1,
  '*innen': 2,
  'erin': 3,
  'gemäß': 4,
  'fällig': 5,
  artig: 6,
  haltig: 7,
  'hältig': 8,
  'jährig': 9,
  'tägig': 10,
  'teilig': 11,
  'reihig': 12,
  kundig: 13,
  'lässig': 14,
  'läufig': 15,
  'mäßig': 16,
  monatig: 17,
  pflichtig: 18,
  seitig: 19,
  selig: 20,
  sichtig: 21,
  sinnig: 22,
  sprachig: 22,
  'ständig': 23,
  stellig: 24,
  'stündig': 25,
  'süchtig': 26,
  lein: 27,
  'tätig': 28,
  'trächtig': 30,
  wertig: 31,
  widrig: 32,
  'wöchig': 33,
  'würdig': 34,
  reich: 35,
  phil: 36,
  phob: 37,
  isch: 38,
  lich: 39,
  ieren: 40,
  ierst: 41,
  iere: 42,
  iert: 43,
  erst: 44,
  haft: 45,
  icht: 46,
  frei: 47,
  voll: 48,
  wert: 49,
  '*in': 50,
  ich: 51,
  ein: 52,
  der: 53,
  und: 54,
  die: 55,
  den: 56,
  rst: 57,
  ren: 58,
  len: 59,
  lst: 60,
  bar: 61,
  tum: 62,
  'tät': 63,
  schaft: 64,
  ness: 63,
  los: 64,
  arm: 65,
  sam: 66,
  ant: 67,
  ent: 68,
  ell: 69,
  eine: 70,
  os: 71,
', dass': 72,
  ', die': 73,
  chen: 74,
  sich: 75,
  nich: 76,
  sche: 77,
  sein: 78,
  nder: 79,
  chte: 80,
  iche: 81,
  inen: 82,
  dies: 83,
  ngen: 84,
  iese: 85,
  eich: 86,
  nach: 87,
  ', der': 88,
  ande: 89,
  schl: 90,
  ssen: 91,
  aber: 92,
  ber: 93,
  auch: 94,
  acht: 95,
  nden: 96,
  alle: 97,
  eben: 98,
  iner: 99,
  ihre: 100,
  eite: 101,
  atte: 102,
  ende: 103,
  rden: 104,
  ehen: 105,
  nter: 106,
  esch: 107,
  agte: 108,
  vers: 109,
  igen: 110,
  inem: 111,
  mein: 112,
  eder: 113,
  ange: 114,
  egen: 115,
  erde: 117,
  schw: 118,
  ten: 119,
  gen: 120,
  nde: 121,
  hen: 122,
  nen: 123,
  sie: 124,
  ter: 125,
  ste: 126,
  das: 127,
  ach: 128,
  ver: 129,
  lic: 130,
  auf: 131,
  ung: 132,
  nge: 133,
  eit: 134,
  mit: 135,
  ben: 136,
  ers: 137,
  tte: 138,
  sic: 139,
  and: 140,
  abe: 141,
  sei: 142,
  aus: 143,
  her: 144,
  lle: 145,
  sen: 146,
  war: 147,
  nte: 148,
  nic: 149,
  ist: 150,
  end: 151,
  hre: 152,
  ges: 153,
  men: 154,
  dem: 155,
  sse: 156,
  uch: 157,
  lei: 158,
  rde: 159,
  ner: 160,
  wei: 161,
  ann: 162,
  ese: 163,
  lte: 164,
  wie: 165,
  rei: 166,
  ige: 167,
  von: 168,
  och: 169,
  hte: 170,
  mme: 171,
  rau: 172,
  ihr: 173,
  ind: 174,
  all: 175,
  ede: 176,
  des: 177,
  ang: 178,
  wir: 179,
  ies: 180,
  als: 181,
  bei: 182,
  ier: 183,
  man: 184,
  enn: 185,
  ing: 186,
  rte: 187,
  ebe: 188,
  vor: 189,
  est: 190,
  lie: 191,
  ege: 192,
  gte: 193,
  ehe: 194,
  ens: 195,
  ass: 196,
  chl: 197,
  ger: 198,
  nne: 199,
  ', das': 200,
  /*
  ':-)': 201,
  ':-))': 202,
  ';-)': 203,
  ':_(': 204,
  '¯\\_(ツ)_/¯': 205,
  */
  ' - ': 206,
  ' – ': 207,
  '.000 ': 208,
  '0000 ': 209,
  '000 ': 210,
  '0000': 211,
  '000': 212,
  son: 213,
  dotter: 214,
  'str. ': 215,
  'pl. ': 216,
  bach: 217,
  beck: 218,
  berg: 219,
  bergen: 220,
  beuern: 221,
  beuren: 222,
  born: 223,
  bronn: 224,
  brand: 225,
  bruch: 226,
  broich: 227,
  bruck: 228,
  brück: 229,
  bühl: 230,
  burg: 231,
  ern: 232,
  büttel: 233,
  damm: 234,
  donk: 235,
  dorf: 236,
  felde: 237,
  feld: 238,
  fels: 239,
  furt: 240,
  furth: 241,
  fürth : 242,
  fehn: 243,
  fleth: 244,
  fleet: 245,
  gmünd: 246,
  graben: 247,
  hafen: 248,
  haven: 249,
  hausen: 250,
  haus: 251,
  stein: 252,
  trop: 253,
  wald: 254,
  heim: 255
}
const DE_COMMON_WORD: NAO = {
  der: 66,
  die: 67,
  und: 68,
  in: 69,
  den: 70,
  von: 71,
  zu: 72,
  das: 73,
  mit: 74,
  im: 75,
  für: 76,
  auf: 77,
  sich: 78,
  sie: 79,
  ist: 80,
  dem: 81,
  es: 82,
  ein: 83,
  so: 84,
  des: 85,
  er: 86,
  dass: 87, 
  nicht: 88,
  am: 89,
  ich: 90,
  eine: 91,
  um: 92,
  an: 93,
  auch: 94,
  nach: 95,
  du: 96,
  ob: 97,
  wo: 98,
  als: 99
} 

for (const word in DE_COMMON_WORD) {
  const upper = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  const lower = `${word.charAt(0).toLowerCase()}${word.slice(1)}`;
  if (/^[A-Za-zÄÖÜäöü]/.test(word)) {
    const switched = word.charAt(0) === word.charAt(0).toLowerCase() ? upper : lower;
    DE_COMMON_WORD[switched] = [_DE.CASE_SWITCH_NEXT, (DE_COMMON_WORD[word] as number)];
  }
}

type cKey = keyof typeof DE_COMMON_POS;
//type cKey = keyof typeof DE_COMMON_POS;
const common = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ...Object.keys(DE_COMMON_POS).sort((a: cKey, b: cKey) => (DE_COMMON_POS[a] - DE_COMMON_POS[b])),
  ...Object.keys(DE_COMMON_CHAR).sort((a: cKey, b: cKey) => (DE_COMMON_CHAR[a] - DE_COMMON_CHAR[b])),
  ...Object.keys(DE_COMMON_WORD).sort((a: cKey, b: cKey) => ((DE_COMMON_WORD[a] as number) - (DE_COMMON_WORD[b] as number))),
];
const DE_CHAR_EXT = [0, 1, 2, ...Object.keys(DE_EXT_CHAR).sort((a, b) => (DE_EXT_CHAR[a] - DE_EXT_CHAR[b]))];
const DE_POS_EXT = Object.keys(DE_EXT_POS).sort((a, b) => (DE_EXT_POS[a] - DE_EXT_POS[b]));
export const DE = {
  _: _DE,
  compress: { 
    commonWord: DE_COMMON_WORD, _1: DE_COMPRESS, _2: DE_COMPRESS2, _3: DE_COMPRESS3, _4: DE_COMPRESS4, 
    extendedCharacter: DE_EXT_CHAR, commonCharacter: DE_COMMON_CHAR, characterWord: DE_CHAR_WORD, 
    extendedPOS: DE_EXT_POS, commonPOS: DE_COMMON_POS, 
    multiKeys: Object.entries(DE_MULTI).splice(Object.keys(DE_MULTI).length/2).map((a) => a[0]).sort((a, b) => (b.length-a.length))
  },
  expand: {
    common, table: {...DE_EXPAND, ...DE_EXPAND2, ...DE_EXPAND3, ...DE_EXPAND4}, 
    extendedCharacter: DE_CHAR_EXT, extendedPOS: DE_POS_EXT,
    characterWord: [
      0, 1, 2,
      ...Object.keys(DE_CHAR_WORD).sort((a, b) => (DE_CHAR_WORD[a] - DE_CHAR_WORD[b]))
    ]
  }
}

const NUMERIC = Object.keys(DE_COMPRESS).filter((k) => k.length > 1 && /^\d+$/.test(k)).reduce((o: NO, k) => {
  if (o[k])
  o[k] = DE_COMPRESS[k];
  return o; 
}, {});
const NUMERICKEYS = Object.keys(NUMERIC).sort((a, b) => (b.length-a.length));
const CHARWORDKEYS = Object.keys(DE_CHAR_WORD).sort((a,b) => b.length - a.length);
const {_, compress} = DE;
const isS = (s: unknown): s is string => (typeof s === 'string' && !!s?.length);
const toCharRes = (c: string, i?: number, a?: string[]): number[] => {
  if (Array.isArray(a) && a.length > 1) {
    const k = a.join('');
    const res = compress.commonPOS[k] ? [compress.commonPOS[k]] : compress.extendedPOS[k];
    if (res) { 
      Array.from(k).forEach((_c, j) => { if (j) { a[i+j] = ''; } })
      return res; 
    }
  }
  return (Object.hasOwnProperty.call(compress.commonCharacter, c)
    ? [compress.commonCharacter[c]] 
    : (Object.hasOwnProperty.call(compress.extendedCharacter, c) ? [_.EXT_CHAR_TABLE, compress.extendedCharacter[c]] : []));
}

const isWordlike = (a: unknown) => Array.isArray(a) && a.length && (
  a[0] > _.m || a[0] === _.TABLE_RANGE_SWITCH_1 || a[0] === _.TABLE_RANGE_SWITCH_2 || a[0] === _.TABLE_RANGE_SWITCH_3
)

const wordMap_popularDE = (a: (string|number)[]) => {
  const text = a.filter((s) => isS(s)).join(' ').trim();
  const words = text.split(' ');
  const o: any = {};
  const wordmap: any = {};

  for (const w of words) { 
    if (!o[w]) { o[w] = 1; }
    o[w] = o[w]+1;
  }
  let res: any;
  let lastRes: any[] = [];
  const toCharWord = (w: string): null|number[] => {
    let a = [];
    for (const k of CHARWORDKEYS) {
      const rk = k.length === 1 ? `[${k.replace('\\', '\\\\')}]` : k.replace(/[.]/g, '[.]');
      if (!a.length) {
        a = w.split(new RegExp(`(${rk})`)).map((s) => s === k ? compress.characterWord[k] : s);
      } else {
        a = a.map((s) => typeof s !== 'string' 
          ? s 
          : s.split(new RegExp(`(${rk})`)).map((s) => s === k ? compress.characterWord[k] : s)).flat();
      }
    }
    // console.log('CHARACTER_WORD', w)
    return [_.CHARACTER_WORD, ...a.flat().filter((n) => typeof n === 'number'), 46];
  }

  Array.from(new Set(words)).filter((s) => isS(s)).map((s: string) => [s, o[s]]).sort((a,b) => b[1]-a[1]).map((a) => a[0]).forEach((w, i) => {
    if (!wordmap[w]) { wordmap[w] = {i, n: []}; }
    const isLastWordlike = isWordlike(lastRes);
    const add = (res: number|number[]) => {
      if (res) {
        const resArr = Array.isArray(res) ? res.flat() : [res];
        for (const n of resArr) { wordmap[w].n.push(n); }
        lastRes = resArr;
      }
      return wordmap[w].n;
    }
    const upperW = `${w.charAt(0).toUpperCase()}${w.slice(1)}`;
    const lowerW = `${w.charAt(0).toLowerCase()}${w.slice(1)}`;
    const switched = w.charAt(0) === w.charAt(0).toLowerCase() ? upperW : lowerW;
    const [_w, __w] = [w.slice(1), w.slice(2)];
    const [w_, w__] = [w.slice(0, -1), w.slice(0, -2)];
    const sw_ = switched.slice(0, -1);
    // console.log(w);
    /* shortest option ... */
    res = compress.commonWord[w] || compress._1[w];
    if (res) { return add(res); }
    /* <-- */
    const results: any[] = [];
    const numstart = w.match(/^\d+/);
    const addOption = (res: number|number[]) => {
      if (res) { results.push(Array.isArray(res) ? res.flat() : [res]); }
      return results;
    }
    
    if (compress.commonWord[switched]) { 
      res = Array.isArray(compress.commonWord[switched]) ? compress.commonWord[switched] : [compress.commonWord[switched]];
      addOption(res[0] === _.CASE_SWITCH_NEXT ? res : [_.CASE_SWITCH_NEXT, ...res]); 
    }
    res = compress._2[w] || compress._3[w] || compress._4[w];
    if (res) { addOption(res); }
    const cSwitched = compress._1[switched] || compress._2[switched] || compress._3[switched] || compress._4[switched];
    if (cSwitched) { 
      res = Array.isArray(cSwitched) ? cSwitched : [cSwitched];
      addOption(res[0] === _.CASE_SWITCH_NEXT ? res : [_.CASE_SWITCH_NEXT, ...res]); 
    }
    
    res = compress.commonWord[_w] ? [compress.commonWord[_w]] : compress._1[_w] || compress._2[_w] || compress._3[_w] || compress._4[_w];
    if (res) { addOption([...(isLastWordlike ? [] : [46]), toCharRes(w.slice(0, 1)), ...res]); }
    res = compress.commonWord[__w] ? [compress.commonWord[__w]] : compress._1[__w]||compress._2[__w]||compress._3[__w]||compress._4[__w];
    if (res) { addOption([...(isLastWordlike ? [] : [46]), ...Array.from(w.slice(0, 2)).map(toCharRes).flat(), ...res]); }
    res = compress.commonWord[w_] ? [compress.commonWord[w_]] : (
      compress.commonWord[sw_] ? [compress.commonWord[sw_]] : compress._1[w_] || compress._2[w_] || compress._3[w_] || compress._4[w_]
    );
    if (res) { addOption([...res, toCharRes(w.slice(-1))]); }
    res = compress.commonWord[w__] ? [compress.commonWord[w__]] : (compress._1[w__]||compress._2[w__]||compress._3[w__]||compress._4[w__]);
    if (res) { addOption([...res, ...Array.from(w.slice(-2)).map(toCharRes).flat()]); }

    res = toCharWord(w);
    if (res) { addOption(res); }

    //if (numstart) { console.log(numstart, NUMERIC[numstart[0]]); } // TODO : _.CHARACTER_WORD
    if (numstart && NUMERIC[numstart[0]]) {
      const start = Array.isArray(NUMERIC[numstart[0]]) ? NUMERIC[numstart[0]] : [NUMERIC[numstart[0]]];
      const rest = w.replace(numstart[0], '');
      if (NUMERIC[rest]) {
        const end = Array.isArray(NUMERIC[rest]) ? NUMERIC[rest] : [NUMERIC[rest]];
        addOption([_.CHARACTER_WORD, ...start, ...end])
      }
      if (compress.extendedPOS[rest]) {
        addOption([_.CHARACTER_WORD, ...start, ...compress.extendedPOS[rest]])
      }
      addOption([_.CHARACTER_WORD, ...start, ...Array.from(rest).map(toCharRes).flat()]);
    } else {
      for (const k of NUMERICKEYS) {
        // e.g. float
        if (w.startsWith(k)) {
          let nArr = [_.CHARACTER_WORD, ...NUMERIC[k]];
          const rest = w.replace(k, '');
          addOption(
            NUMERIC[rest]
              ? [...nArr, ...(Array.isArray(NUMERIC[rest]) ? NUMERIC[rest] : [NUMERIC[rest]])]
              : (compress.extendedPOS[rest] 
                ? [...nArr, ...compress.extendedPOS[rest]]
                : [...nArr, ...Array.from(rest).map(toCharRes).flat()])
          );
          break;
        }
      }
    }

    if (w.length > 2) {
      let pa: any[] = [];
      const parts = w.split(/([-–:]+)/).filter((s) => s);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        const nonWord = w.match(/^[-–:]*/);
        if (p.length < 3 || (nonWord && nonWord?.length && nonWord[0]?.length) && pa.length) {
          pa = [...pa, ...Array.from(p).map(toCharRes).flat()];
          continue;
        }
        const hasSpace = i === parts.length-1;
        let upper = `${p.charAt(0).toUpperCase()}${p.slice(1)}`;
        let lower = `${p.charAt(0).toLowerCase()}${p.slice(1)}`;      
        let sp = p.charAt(0) === p.charAt(0).toLowerCase() ? upper : lower;
        if (compress.commonWord[p]) { 
          const cw = [compress.commonWord[p]];
          pa = [...pa, ...( hasSpace ? cw : [_.NO_SPACE_NEXT, ...cw] )]; 
          continue; 
        }
        if (compress.commonWord[sp]) { 
          const cw = [compress.commonWord[sp]];
          pa = [...pa, ...( hasSpace ? cw : [_.NO_SPACE_NEXT, ...cw] )];
          continue; 
        }
        res = compress._1[p] || compress._2[p] || compress._3[p] || compress._4[p];
        if (res) { pa = [...pa, ...(hasSpace ? res : [_.NO_SPACE_NEXT, ...res])]; continue; }
        res = compress._1[sp] || compress._2[sp] || compress._3[sp] || compress._4[sp];
        if (res) { pa = [...pa, ...(hasSpace ? res : [_.NO_SPACE_NEXT, ...res])]; continue; }
        if (/^\d+$/.test(w)) {
          res = NUMERIC[w];
          if (res) { pa = [...pa, ...(hasSpace ? res : [_.NO_SPACE_NEXT, ...res])]; continue; }
          for (const k of NUMERICKEYS) {
            if (w.startsWith(k)) {
              const nArr = [_.NO_SPACE_NEXT, ...NUMERIC[k]];
              const restArr = Array.from(w.replace(k, '')).map((c) => compress.extendedCharacter[c]);
              pa = [...pa, ...(hasSpace ? restArr.flat() : [...nArr, ...restArr.flat()].flat())];
              continue; 
            }
          }
          pa = [...pa, ...(Array.from(w).map((c) => compress.extendedCharacter[c]))];
          continue;
        }
      }
      if (pa.length) { addOption(!isWordlike(pa) ? (isLastWordlike ? pa : [46, ...pa]) : pa); }
    }
    // TODO repeatPos, multiTable
    const bestResult = results.sort((a,b) => (a.length-b.length))[0];
    if (bestResult.length > 5) {
      let starts = [];
      for (let i = 2; i < w.length; i++) {
        const sw = w.slice(0, i);
        res = compress._1[sw] || compress._2[sw] || compress._3[sw] || compress._4[sw];
        if (res) { starts.push([sw, res]); }
      }

      if (starts.length) {
        const bestStart = starts.sort((a, b) => (a[1].length - b[1].length)).sort((a, b) => (b[0].length - a[0].length))[0];
        let rest = w.replace(bestStart[0],'');
        if (/^[-–:]$/.test(rest) || rest.length < 4) {
          addOption([...bestStart[1], compress.commonPOS[rest] || Array.from(rest).map(toCharRes).flat()]);
        }
        
        const restRes = compress.commonWord[rest] || compress._1[rest] || compress._2[rest] || compress._3[rest] || compress._4[rest];
        if (restRes) { addOption([_.NO_SPACE_NEXT, ...bestStart[1], ...restRes]); }

        starts = [];
        for (let i = 2; i < rest.length; i++) {
          const sw = w.slice(0, i);
          res = compress._1[sw];
          if (res) { starts.push([sw, [_.NO_SPACE_NEXT, ...res]]); }
        }
        if (starts.length) {
          const bestStart2 = starts.sort((a, b) => (a[1].length - b[1].length)).sort((a, b) => (b[0].length - a[0].length))[0];
          const rest2 = rest.replace(bestStart2[0],'');
          addOption([...bestStart[1], ...bestStart2[1], (compress.commonPOS[rest2] || Array.from(rest2).map(toCharRes).flat())]);
        }

        
        if (rest.length > 2) {
          if (rest.length < 6) {
            let pparts = [];
            for (let i = rest.length; i>1; i--) {
              const sl = rest.slice(0,i);
              if (compress.commonPOS[sl]) {
                pparts.push([sl, compress.commonPOS[sl]])
              } else if (compress.extendedPOS[sl]) {
                pparts.push([sl, compress.extendedPOS[sl]])
              }
            }
            const pSorted = [...pparts.sort((a, b) => (b[0].length-a[0].length))];
            pparts = [];
            if (pSorted.length) {
              rest = w.replace(pSorted[0][0], '');
              for (let i = rest.length; i>1; i--) {
                const sl = rest.slice(0,i);
                if (compress.commonPOS[sl]) {
                  pparts.push([_.NO_SPACE_NEXT, sl, compress.commonPOS[sl]])
                } else if (compress.extendedPOS[sl]) {
                  pparts.push([_.NO_SPACE_NEXT, sl, compress.extendedPOS[sl]])
                }
              }
              addOption([
                ...(Array.isArray(pSorted[0][1]) ? pSorted[0][1] : [pSorted[0][1]]),
                ...(pparts.length ? pparts.sort((a, b) => (b[0].length-a[0].length)) : Array.from(rest).map(toCharRes).flat())
              ]);
            }
          }
        }
      }
    }

    const result = results.sort((a,b) => (a.length-b.length))[0];
    // if (result.length > 3) { console.log('>3:', w, result)}
    add(result);
    return result;
  });

  for (const k of Object.keys(wordmap).filter((k) => !wordmap[k].n.length)) {
    const first = k.slice(0,-1);
    const first2 = k.slice(0,-2);
    const last = k.slice(-1);
    const last2 = k.slice(-2);
    if (wordmap[first]) { wordmap[k].n = [...wordmap[first].n, ...toCharRes(last)]; continue; }
    if (wordmap[first2]) { wordmap[k].n = [...wordmap[first2].n, ...Array.from(last2).map(toCharRes).flat()]; continue; }
    let res = compress._1[first] || compress._2[first] || compress._3[first] || compress._4[first];
    if (res) { 
      wordmap[k].n = [...res, (compress.commonCharacter[last] || compress.extendedCharacter[last])];
      continue; 
    }
    res = compress._1[first2] || compress._2[first2] || compress._3[first2] || compress._4[first2];
    if (res) { 
      const rest = compress.commonPOS[last2] ? [compress.commonPOS[last2]] : Array.from(last2).map(toCharRes).flat();
      wordmap[k].n = [...res, ...rest];
      continue; 
    }

    const wordparts = {[k]: []};
    let [upper, lower, p, sp] = ['', '', k, ''];
    for (let i = 1; i < p.length-2; i++) {
      const last = p.slice(0-i);
      const start = p.slice(0, (0-i));
      upper = `${start.charAt(0).toUpperCase()}${start.slice(1)}`;
      lower = `${start.charAt(0).toLowerCase()}${start.slice(1)}`;      
      sp = p.charAt(0) === p.charAt(0).toLowerCase() ? upper : lower;
      if (compress.commonWord[start]) {
        wordparts[k].push([start, [_.NO_SPACE_NEXT, compress.commonWord[start], last]]);
      } else {
        res = compress._1[start] || compress._2[start] || compress._3[start] || compress._4[start];
        if (res) { wordparts[k].push([start, [_.NO_SPACE_NEXT, ...res, last]]); }
        res = compress._1[sp] || compress._2[sp] || compress._3[sp] || compress._4[sp];
        if (res) { wordparts[k].push([start, [_.NO_SPACE_NEXT, ...res, last]]); }
      }
    }

    for (let i = p.length-2; i > 0; i--) {
      const first = p.slice(0, (0-i));
      const start = p.slice(0-i);
      if (compress.commonWord[start]) {
        wordparts[k].push([[first, compress.commonWord[start]], start]);
      } else {
        res = compress._1[start] || compress._2[start] || compress._3[start] || compress._4[start];
        if (res) { wordparts[k].push([[first, ...res], start]); }
        res = compress._1[sp] || compress._2[sp] || compress._3[sp] || compress._4[sp];
        if (res) { wordparts[k].push([[first, ...res], start]); }
      }
    }
    
    for (const w in wordparts) {
      const [prefix, suffix] = [{}, {}];
      for (const a of wordparts[w]) {
        if (isS(a[0])) {
          if (!prefix[a[0]]) { prefix[a[0]] = []; }
          prefix[a[0]].push(a[1]);
        } else {
          if (!suffix[a[1]]) { suffix[a[1]] = []; }
          suffix[a[1]].push(a[0]);
        }
      }
      for (const k in prefix) { prefix[k] = prefix[k].sort((a,b) => (a.length - b.length))[0]; }
      for (const k in suffix) { suffix[k] = suffix[k].sort((a,b) => (a.length - b.length))[0]; }
      for (const k2 in prefix) {
        const suf = prefix[k2].filter((s) => isS(s))[0];
        if (suffix[suf] && suffix[suf][0] === k) {
          wordmap[k].n = [...prefix[k2].filter((s) => !isS(s)), ...suffix[suf].slice(1)];
          continue; 
        }
      }
      const prefixes = Object.keys(prefix).sort((a, b) => (a.length - b.length));
      const suffixes = Object.keys(suffix).sort((a, b) => (a.length - b.length));
      if (prefixes[0].length > suffixes[0].length) {
        wordmap[k].n = prefix[prefixes[0]].map((n) => {
          if (!isS(n)) {return n}
          return compress.commonPOS[last2] 
            ? [compress.commonPOS[last2]] 
            : (compress.extendedPOS[last2] ? [_.POS_TABLE_NO_SPACE_BEFORE, compress.extendedPOS[last2]] : Array.from(last2).map(toCharRes).flat());
        }).flat();
        continue; 
      } else {
        wordmap[k].n = suffix[suffixes[0]].map((n) => {
          if (!isS(n)) {return n}
          return [
            ...(compress.commonPOS[n] 
              ? [compress.commonPOS[n]] 
              : (compress.extendedPOS[n] ? [_.POS_TABLE_NO_SPACE_BEFORE, compress.extendedPOS[n]] : Array.from(n).map(toCharRes).flat()))
          ]
        }).flat();
        continue; 
      }
    }
    wordmap[k].n = [46, ...Array.from(k).map(toCharRes).flat()];
  }
  // console.log(missing);
  /*
  let [has, i, firstDup] = [{}, 0, 1];
  for (const w of words) {
    if (i === 100 || has[w]) { firstDup = i; break; }
    has[w] = i;
    i = i+1;
  }
  */
  //console.log('first Dup', firstDup, words.slice(0, firstDup));

  const u = {};
  for (const w of words) {
    if (!u[w]) { u[w] = 1; }
    u[w] = u[w] + 1;
  }
  for (const w in u) {
    if (compress.commonWord[w] || compress._1[w] || compress._2[w] || compress._3[w] ) { delete u[w] }
    if (/^[A-Za-zÄÖÜäöü]/.test(w)) {
      const upper = `${w.charAt(0).toUpperCase()}${w.slice(1)}`;
      const lower = `${w.charAt(0).toLowerCase()}${w.slice(1)}`;
      const switched = w.charAt(0) === w.charAt(0).toLowerCase() ? upper : lower;
      if (compress.commonWord[switched] || compress._1[switched]) { delete u[switched] }
    }
  }
  
  for (const w in wordmap) { wordmap[w] = wordmap[w].n }
  const popular = Object.keys(u).sort((a, b) => (u[b] - u[a])).map((k) => [k, wordmap[k]]).slice(0, 3);
  /*
  const r = {}
  for (const w in wordmap) { 
    wordmap[w].filter((n) => n<47).forEach((n) => { if (!r[n]) {r[n] = 1;} else {r[n] = r[n]+1;}});
  }
  console.log(r);
  */
  return [wordmap, popular];
}

const compressWordsDE = (text: string, wordmap: {[k: string]: (string|number)[]}, popular: {[k: string]: number[]}) => {
  // console.log(NUMERIC);
  text = text.trim();
  const words = text.split(' ');
  /* 
  console.log('uniqueWords', uniqueWords);
  console.log('wordmap', Object.keys(wordmap).map((w) => wordmap[w].i).sort((a,b) => a-b));
  */
  
  let compressedArray = words.reduce((r, w, i, a) => {
    const isChar = (wordmap[w][0] > _.MULTI && wordmap[w][0] < 66) || 
      wordmap[w][0] === _.EXT_CHAR_TABLE || wordmap[w][0] === _.EXT_POS_TABLE;
    return (isChar && isWordlike(wordmap[a[i-1]])) ? [...r, 46, ...wordmap[w]] : [...r, ...wordmap[w]]; 
  }, []);
  //words.map((w) => wordmap[w]);
/*  console.log( 'compressedArray', JSON.stringify(compressedArray));
  console.log( 'popular words short', popular);
  console.log(
    Object.keys(compress._1).map((k) => compress._1[k][0]).sort(),
    Object.keys(compress._2).map((k) => compress._2[k][0]).sort(),
    Object.keys(compress.extendedCharacter).map((k) => compress.extendedCharacter[k][0]).sort(),
    Object.keys(compress.extendedCharacter).map((k) => compress.extendedCharacter[k][1]).sort(),
  )*/
  popular.forEach((arr, i) => {
    const a = JSON.stringify(arr[1]);
    let had = false;
    compressedArray = compressedArray.map((bArr) => {
      const b = JSON.stringify(bArr);
      if (a === b) {
        if (!had) {
          // console.log(a, [i, ...arr[2]]);
          had = true;
          return [i, ...arr[1]];
        } else {
          return i;
        }
      }
      return bArr;
    });
  });

  return compressedArray.flat();
}


const {_2, _3, _4, _5, _6} = DE_COMPRESS_MULTI_KEYS;
const reduceToMulti = (text: string) => {
  const ignore = new Set();
  const words = text.split(' ');
  const l = words.length;
  const add = (v, i, count = 2, isTable = true) => {
    for (let j = 1; j < count; j++) { ignore.add(i+j); }
    return [(isTable ? _.MULTI_TABLE : _.MULTI), ...v]
  }
  return words.reduce((r, w, i) => {
    if (ignore.has(i) || i > words.length-3) { return r; }
    const s2 = `${w} ${words[i+1]}`;
    const s3 = i < (l - 3) ? `${s2} ${words[i+2]}` : '';
    const s4 = i < (l - 4) ? `${s3} ${words[i+3]}` : '';
    const s5 = i < (l - 5) ? `${s4} ${words[i+4]}` : '';
    const s6 = i < (l - 6) ? `${s5} ${words[i+5]}` : '';
    if (i < l - 6 && _6._3[s6]) { r.push([s6, add(_6._3[s6], i, 6)]); return r; }
    if (i < l - 5 && _5._3[s5]) { r.push([s5, add(_5._3[s5], i, 5)]); return r; }
    if (i < l - 4 && Object.hasOwnProperty.call(DE_MULTI, s4)) { r.push([s4, add([DE_MULTI[s4]], i, 4, false)]); return r; }
    if (i < l - 4 && _4._3[s4]) { r.push([s4, add(_4._3[s4], i, 4)]); return r; }
    if (i < l - 3 && Object.hasOwnProperty.call(DE_MULTI, s3)) { r.push([s3, add([DE_MULTI[s3]], i, 3, false)]); return r; }
    if (i < l - 3 && _3._3[s3]) { r.push([s3, add(_3._3[s3], i, 3)]); return r; }
    if (Object.hasOwnProperty.call(DE_MULTI, s2)) { r.push([s2, add([DE_MULTI[s2]], i, 2, false)]); return r; }
    if (_2._3[s2]) { r.push([s2, add(_2._3[s2], i, 2)]); return r; }
    return r;
  }, []).sort((a, b) => (b[0].length - a[0].length));
}
/*
const reduceToMulti = (text: string) => {
  const ignore = new Set();
  const words = text.split(' ');
  const l = words.length;
  const add = (v, i, maxIgnore = 1, isTable = true) => {
    for (let j = 0; j <= maxIgnore; j++) { ignore.add(i+j); }
    return [(isTable ? _.MULTI_TABLE : _.MULTI), ...v]
  }
  return words.reduce((r, w, i) => {
    if (ignore.has(i)) { return r; }
    let s6, s5, s4;
    if (i < l - 6) {
      s6 = `${w} ${words[i+1]} ${words[i+2]} ${words[i+3]} ${words[i+4]} ${words[i+5]}`;
      if (_6._3[s6]) { r.push([s6, add(_6._3[s6], i, 5)]); return r; }
    } else if (i < l - 5) {
      s5 = `${w} ${words[i+1]} ${words[i+2]} ${words[i+3]} ${words[i+4]}`;
      if (_5._3[s5]) { r.push([s5, add(_5._3[s5], i, 4)]); return r; }
    } else if (i < l - 4) {
      s4 = `${w} ${words[i+1]} ${words[i+2]} ${words[i+3]}`;
      if (DE_MULTI[s4]) { r.push([s4, add([DE_MULTI[s4]], i, 3, false)]); return r; }
      if (_4._3[s4]) { r.push([s4, add(_4._3[s4], i, 3)]); return r; }
    }
    const s2 = `${w} ${words[i+1]}`;
    const s3 = `${s2} ${words[i+2]}`;
    if (i < l - 3 && DE_MULTI[s3]) { r.push([s3, add([DE_MULTI[s3]], i, 2, false)]); return r; }
    if (i < l - 3 && _3._3[s3]) { r.push([s3, add(_3._3[s3], i, 2)]); return r; }
    if (i < l - 2 && DE_MULTI[s2]) { r.push([s2, add([DE_MULTI[s2]], i, 1, false)]); return r; }

    if (i < l - 6 && _6._4[s6]) { r.push([s6, add(_6._4[s6], i, 5)]); return r; }
    if (i < l - 5 && _5._4[s5]) { r.push([s5, add(_5._4[s5], i, 4)]); return r; }
    if (i < l - 4 && _4._4[s4]) { r.push([s4, add(_4._4[s4], i, 3)]); return r; }
    if (i < l - 3 && _3._4[s3]) { r.push([s3, add(_3._4[s3], i, 2)]); return r; }
    return r;
  }, []);
}*/

export const compressDE = (text: string) => {
  // console.log(NUMERIC);
  text = text.trim();
  const multi = reduceToMulti(text);
  // console.log(multi);
  let m = [text];
  for (const a of multi) {
    const [s, v] = a;
    m = m.flat().map((el) => {
      if (!isS(el) || el.indexOf(` ${s} `) < 0) { return el; }
      const splitted = el.split(new RegExp(`( ${s} )`));
      if (splitted.length > 1) { return (splitted.map((r) => r === ` ${s} ` ? v : r)).flat(); }
    }).flat();
  }
  for (const a of multi) {
    const [s, v] = a;
    m = m.flat().map((el) => {
      if (!isS(el) || el.indexOf(`${s} `) < 0) { return el; }
      const splitted = el.split(new RegExp(`(${s} )`));
      if (splitted.length > 1) { return (splitted.map((r) => r === `${s} ` ? v : r)).flat(); }
    }).flat();
  }
  for (const a of multi) {
    const [s, v] = a;
    m = m.flat().map((el) => {
      if (!isS(el) || el.indexOf(`${s} `) < 0) { return el; }
      const splitted = el.split(new RegExp(`( ${s})`));
      if (splitted.length > 1) { return (splitted.map((r) => r === ` ${s}` ? v : r)).flat(); }
    }).flat();
  }

  m = m.flat().reduce((r, el, i) => {
    if (!isS(el)) { r.push(el); return r; }
    return [...r, ...el.split(/(\n)/).map((el) => el === '\n' ? 50 : el)]
      //.reduce((a: (string|number)[], l, i, _lines) => ((i < _lines.length-1) ? [...a, l, 50] : [...a, l]), [])];
  }, []).reduce((r, el, i) => {
    if (!isS(el)) { r.push(el); return r; }
    const l = el.split(' ').length;
    if (l < 5 && Object.hasOwnProperty.call(DE_MULTI, el)) {
      return [...r, ...[_.MULTI, DE_MULTI[el]]];
    } else if (DE_COMPRESS_MULTI_KEYS[`_${l}`]) {
      if (DE_COMPRESS_MULTI_KEYS[`_${l}`]._3[el]) {
        return [...r, ...[_.MULTI_TABLE, DE_COMPRESS_MULTI_KEYS[`_${l}`]._3[el]]];
      }
      if (DE_COMPRESS_MULTI_KEYS[`_${l}`]._4[el]) {
        return [...r, ...[_.MULTI_TABLE, DE_COMPRESS_MULTI_KEYS[`_${l}`]._4[el]]];
      }
    };
    return [...r, el];
  }, []).flat();
  const [wordmap, popular] = wordMap_popularDE(m);
  // console.log(JSON.stringify(m), wordmap);

  const compressedArray = m.reduce((r, el, i) => {
    if (!isS(el)) { r.push(el); return r; }
    return [...r, ...compressWordsDE(el, wordmap, popular)]
  }, []).flat().filter((n) => (typeof n === 'number'));
  
  return new Uint8Array(compressedArray);
}


const expandFN = {
  stub: (r) => r,
  CASE_SWITCH_NEXT: (r) => `${
    (r.charAt(0) === r.charAt(0).toLowerCase()) ? r.charAt(0).toUpperCase() : r.charAt(0).toLowerCase()
  }${r.slice(1)}`,
  DELETE_LAST2: (r) => r.slice(0, -2),
  DELETE_LAST: (r) => r.slice(0, -1),
  UPPER_nis: (r) => `${r.charAt(0).toUpperCase()}${r.slice(1)}nis`,
  UPPER_REPLACE_en_ung: (r) => `${r.charAt(0).toUpperCase()}${r.replace(/en$/, 'ung')}`,
  UPPER_REPLACE_en_barkeit: (r) => `${r.charAt(0).toUpperCase()}${r.replace(/en$/, 'barkeit')}`,
  LOWER_REPLACE_en_bar: (r) => `${r.charAt(0).toLowerCase()}${r.replace(/en$/, 'bar')}`,
  UPPER_DELETE_n: (r) => `${r.charAt(0).toUpperCase()}${r.slice(1,-1)}`,
};

export const expandDE = (uint8arr: Uint8Array) => {
  const {_, expand} = DE;
  const words = [];
  const ignore = new Set();
  const a = Array.from(uint8arr);

  const isSpace = (n) => n !== _.NO_SPACE_NEXT;
  let had = false;
  for (const [i, n] of a.entries()) {
    if (ignore.has(i)) { continue; }
    const before = i && a[i-1];
    const next = a[i+1];
    const next2 = a[i+2];
    const lastA = Array.isArray(words[words.length-1]) && before !== _.NO_SPACE_NEXT;

    if (n === _.MULTI_TABLE) {
      ignore.add(i+1); ignore.add(i+2);
      words.push([DE_EXPAND_MULTI[next][next2]]);
      continue;
    }
    if (n === _.MULTI) {
      ignore.add(i+1);
      words.push([DE_MULTI[next]]);
      continue;
    }
    if (n === _.CHARACTER_WORD) {
      const nA = [];
      for (const [j, n2] of a.slice(i+1).entries()) {
        if (n2 !== 46) {
          ignore.add(i+1+j);
          nA.push(n2);
        } else {
          break;
        }
      }
      words.push([nA.map((n) => expand.characterWord[n]).join('')])
      continue;
    }

    if (n === _.TABLE_RANGE_SWITCH_1 || n === _.TABLE_RANGE_SWITCH_2 || n === _.TABLE_RANGE_SWITCH_3) {
      ignore.add(i+1); ignore.add(i+2);
      words.push(lastA || isSpace(before) ? [expand.table[n][next][next2]] : expand.table[n][next][next2]);
      continue;
    }
    if (n > _.MULTI && n < 66 && Array.isArray(words[words.length-1])) {
      words[words.length-1].push(expand.common[n]);
      continue;
    }
    if ((n === _.EXT_CHAR_TABLE || n === _.POS_TABLE_NO_SPACE_BEFORE) && Array.isArray(words[words.length-1])) {
      ignore.add(i+1);
      words[words.length-1].push(n === _.EXT_CHAR_TABLE ? expand.extendedCharacter[next] : expand.extendedPOS[next]);
      continue;
    }
    
    if (n === _.EXT_CHAR_TABLE || n === _.POS_TABLE_NO_SPACE_BEFORE || n > 99) {
      ignore.add(i+1);
      words.push( n === _.EXT_CHAR_TABLE 
        ? expand.extendedCharacter[next] 
        : (n === _.POS_TABLE_NO_SPACE_BEFORE ? expand.extendedPOS[next] : (lastA || isSpace(before) ? [expand.table[n][next]] : expand.table[n][next])));
      continue;
    }
    if (n > _.MULTI && n < 100) { 
      words.push(n < 66 ? expand.common[n] : ((i > 1 && lastA && isSpace(a[i-2])) || isSpace(before) ? [expand.common[n]] : expand.common[n]));
      continue;
    }
    if (n !== _.NO_SPACE_NEXT || (typeof next === 'number' && next < _.MULTI)) {words.push(n);}
  }
  // console.log(words, words.slice(-100));

  const expanded = words.reduce((a, el, i) => {
    if (!i || typeof el === 'number') { return [...a, el] }
    if (Array.isArray(el) && Array.isArray(words[i+1]) && el[el.length-1] === ' ') { el.pop(); }
    if (Array.isArray(el) && el[el.length-2] === ' ') {
      const nextStart = el.slice(-1)[0];
      el = el.slice(0, -2);
      if (Array.isArray(words[i+1])) {
        words[i+1][0] = `${nextStart}${words[i+1][0]}`;
      } else {
        if (expandFN[_[words[i+1]]]) { 
          // TODO -check space ?
          words[i+1] = `${nextStart}${expandFN[_[words[i+1]]](Array.isArray(words[i+2]) ? words[i+2].join('') : words[i+2])}`;
          words[i+2] = '';
        }
        return [...a, el] 
      }
    }
      
    const last = a[a.length-1];
    if ((typeof el === 'string' && typeof last === 'string') || (Array.isArray(el) && typeof last === 'string' && /[-–:]$/.test(last))) { 
      a[a.length-1] = `${last}${el}`; 
      return a; 
    }
    return [...a, el]; 
  }, []).filter((n, i) => {
    if (n === '') { return false; }
    if (typeof n === 'number' && n < 3 && !popWords[n]) { 
      popWords[n] = expanded[i+1];
      if (Array.isArray(popWords[n])) { popWords[n] = popWords[n].join(''); }
      return false;
    }
    return true;
  });
  
  // console.log(expanded, expanded.slice(-100));
  
  const popWords = ['', '', ''];
  let returnFn = expandFN.stub;
  const text = expanded.reduce((r, el: unknown, i: number) => {
    if (el === '') { return r; }
    if (typeof el === 'number') {
      if (el < 3) { return r; /*popWords[el];*/ }
      if (el === _.NO_SPACE_NEXT && expandFN[_[expanded[i+2]]]) { 
        returnFn = expandFN[_[expanded[i+2]]];
        const end = Array.isArray(expanded[i+3]) ? expanded[i+3][0] : expanded[i+3];
        const res = expanded[i+1]+returnFn(end);
        el = ''; expanded[i+1] = ''; expanded[i+2] = ''; expanded[i+3] = '';
        returnFn = expandFN.stub;
        return [...r, res.endsWith('\n') ? res : `${res} `];
      } // !!! 9 [ "Eder" ]
      if (expandFN[_[el]]) { 
        returnFn = expandFN[_[el]];
        return r;
      } 
      return [...r, el]; 
    }
    const res = returnFn(Array.isArray(el) ? el.join('') : el);
    returnFn = expandFN.stub;
    return [...r, res.endsWith('\n') ? res : `${res} `];
  }, []).join(''); //.replace(/ +/g, ' ');
  
  return text;
}

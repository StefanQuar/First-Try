/**
 * Quiz Question Catalog
 * ---------------------
 * Questions organized by category.
 * Each question has:
 *   - question: the question sentence
 *   - options: array of exactly 4 answer options
 *   - correctIndex: which option is correct (0 = first, 1 = second, 2 = third, 3 = fourth)
 *   - funFact: short text shown after the user answered (right or wrong)
 */

const QUESTIONS = {
  "Wer hat's erfunden?": [
    {
      question: "Wer hat das Telefon erfunden?",
      options: [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Guglielmo Marconi"
      ],
      correctIndex: 1,
      funFact: "Alexander Graham Bell erhielt 1876 das Patent für das Telefon, obwohl es auch andere Erfinder gab, die ähnliche Geräte entwickelten."
    },
    {
      question: "Wer hat die Glühbirne erfunden?",
      options: [
        "Thomas Edison",
        "Nikola Tesla",
        "Heinrich Göbel",
        "Joseph Swan"
      ],
      correctIndex: 0,
      funFact: "Thomas Edison entwickelte 1879 die erste praktisch nutzbare Glühbirne, obwohl mehrere Erfinder an ähnlichen Ideen arbeiteten."
    },
    {
      question: "Wer hat das Automobil erfunden?",
      options: [
        "Henry Ford",
        "Karl Benz",
        "Gottlieb Daimler",
        "Rudolf Diesel"
      ],
      correctIndex: 1,
      funFact: "Karl Benz baute 1886 das erste Automobil mit Verbrennungsmotor, das als Patent-Motorwagen bekannt wurde."
    },
    {
      question: "Wer hat das Internet erfunden?",
      options: [
        "Bill Gates",
        "Tim Berners-Lee",
        "Steve Jobs",
        "Vinton Cerf"
      ],
      correctIndex: 1,
      funFact: "Tim Berners-Lee entwickelte 1989 das World Wide Web (WWW), während Vinton Cerf als 'Vater des Internets' für die TCP/IP-Protokolle gilt."
    },
    {
      question: "Wer hat die Relativitätstheorie entwickelt?",
      options: [
        "Isaac Newton",
        "Niels Bohr",
        "Albert Einstein",
        "Max Planck"
      ],
      correctIndex: 2,
      funFact: "Albert Einstein veröffentlichte 1905 die spezielle und 1915 die allgemeine Relativitätstheorie, die unser Verständnis von Raum und Zeit revolutionierte."
    },
    {
      question: "Wer hat die Dampfmaschine erfunden?",
      options: [
        "James Watt",
        "Thomas Newcomen",
        "George Stephenson",
        "Richard Trevithick"
      ],
      correctIndex: 0,
      funFact: "James Watt verbesserte 1769 die Dampfmaschine erheblich und machte sie damit zur treibenden Kraft der industriellen Revolution."
    },
    {
      question: "Wer hat das Penicillin entdeckt?",
      options: [
        "Louis Pasteur",
        "Alexander Fleming",
        "Robert Koch",
        "Paul Ehrlich"
      ],
      correctIndex: 1,
      funFact: "Alexander Fleming entdeckte 1928 zufällig das Penicillin, als er bemerkte, dass Schimmelpilze Bakterien abtöteten."
    },
    {
      question: "Wer hat die Röntgenstrahlen entdeckt?",
      options: [
        "Marie Curie",
        "Wilhelm Conrad Röntgen",
        "Henri Becquerel",
        "Ernest Rutherford"
      ],
      correctIndex: 1,
      funFact: "Wilhelm Conrad Röntgen entdeckte 1895 die Röntgenstrahlen und erhielt dafür 1901 den ersten Nobelpreis für Physik."
    },
    {
      question: "Wer hat das Radio erfunden?",
      options: [
        "Guglielmo Marconi",
        "Nikola Tesla",
        "Heinrich Hertz",
        "Alexander Popov"
      ],
      correctIndex: 0,
      funFact: "Guglielmo Marconi entwickelte 1895 das erste funktionierende Funkübertragungssystem und gilt als Pionier der drahtlosen Kommunikation."
    },
    {
      question: "Wer hat die Druckerpresse erfunden?",
      options: [
        "Johannes Gutenberg",
        "William Caxton",
        "Alois Senefelder",
        "Ottmar Mergenthaler"
      ],
      correctIndex: 0,
      funFact: "Johannes Gutenberg entwickelte um 1450 den Buchdruck mit beweglichen Lettern, was die Verbreitung von Wissen revolutionierte."
    },
    {
      question: "Wer hat das Flugzeug erfunden?",
      options: [
        "Otto Lilienthal",
        "Gebrüder Wright",
        "Alberto Santos-Dumont",
        "Louis Blériot"
      ],
      correctIndex: 1,
      funFact: "Die Gebrüder Wright (Orville und Wilbur) führten 1903 den ersten kontrollierten Motorflug durch."
    },
    {
      question: "Wer hat die Impfung entwickelt?",
      options: [
        "Louis Pasteur",
        "Edward Jenner",
        "Robert Koch",
        "Jonas Salk"
      ],
      correctIndex: 1,
      funFact: "Edward Jenner entwickelte 1796 die erste Impfung gegen Pocken, indem er Menschen mit harmloseren Kuhpocken infizierte."
    },
    {
      question: "Wer hat das Fernsehen erfunden?",
      options: [
        "John Logie Baird",
        "Philo Farnsworth",
        "Vladimir Zworykin",
        "Paul Nipkow"
      ],
      correctIndex: 0,
      funFact: "John Logie Baird führte 1926 die erste öffentliche Fernsehübertragung durch und entwickelte das mechanische Fernsehen."
    },
    {
      question: "Wer hat die DNA-Struktur entdeckt?",
      options: [
        "Rosalind Franklin",
        "James Watson und Francis Crick",
        "Linus Pauling",
        "Maurice Wilkins"
      ],
      correctIndex: 1,
      funFact: "James Watson und Francis Crick beschrieben 1953 die Doppelhelix-Struktur der DNA, basierend auf Röntgenbildern von Rosalind Franklin."
    },
    {
      question: "Wer hat die Quantenmechanik entwickelt?",
      options: [
        "Albert Einstein",
        "Max Planck",
        "Werner Heisenberg",
        "Niels Bohr"
      ],
      correctIndex: 1,
      funFact: "Max Planck legte 1900 mit seiner Quantenhypothese den Grundstein für die Quantenmechanik, die die Physik revolutionierte."
    },
    {
      question: "Wer hat die Evolutionstheorie entwickelt?",
      options: [
        "Charles Darwin",
        "Alfred Russel Wallace",
        "Jean-Baptiste Lamarck",
        "Gregor Mendel"
      ],
      correctIndex: 0,
      funFact: "Charles Darwin veröffentlichte 1859 'Die Entstehung der Arten' und prägte damit die moderne Evolutionstheorie."
    },
    {
      question: "Wer hat die Psychoanalyse entwickelt?",
      options: [
        "Carl Jung",
        "Sigmund Freud",
        "Alfred Adler",
        "Wilhelm Wundt"
      ],
      correctIndex: 1,
      funFact: "Sigmund Freud begründete Ende des 19. Jahrhunderts die Psychoanalyse und revolutionierte damit die Psychologie."
    },
    {
      question: "Wer hat den Dynamit erfunden?",
      options: [
        "Alfred Nobel",
        "Robert Oppenheimer",
        "Fritz Haber",
        "Carl Bosch"
      ],
      correctIndex: 0,
      funFact: "Alfred Nobel erfand 1867 das Dynamit, was ihm ein großes Vermögen einbrachte, das später den Nobelpreis finanzierte."
    },
    {
      question: "Wer hat die Gravitationstheorie entwickelt?",
      options: [
        "Galileo Galilei",
        "Isaac Newton",
        "Albert Einstein",
        "Johannes Kepler"
      ],
      correctIndex: 1,
      funFact: "Isaac Newton formulierte 1687 in seinem Werk 'Principia' die Gesetze der Gravitation und Mechanik."
    },
    {
      question: "Wer hat die Mikroskopie begründet?",
      options: [
        "Antonie van Leeuwenhoek",
        "Robert Hooke",
        "Zacharias Janssen",
        "Ernst Abbe"
      ],
      correctIndex: 0,
      funFact: "Antonie van Leeuwenhoek baute im 17. Jahrhundert die ersten leistungsstarken Mikroskope und entdeckte damit Bakterien."
    },
    {
      question: "Wer hat die Batterie erfunden?",
      options: [
        "Alessandro Volta",
        "Michael Faraday",
        "Georg Simon Ohm",
        "André-Marie Ampère"
      ],
      correctIndex: 0,
      funFact: "Alessandro Volta entwickelte 1800 die erste elektrochemische Batterie, die Voltaische Säule."
    },
    {
      question: "Wer hat den Computer erfunden?",
      options: [
        "Alan Turing",
        "Charles Babbage",
        "Konrad Zuse",
        "John von Neumann"
      ],
      correctIndex: 1,
      funFact: "Charles Babbage entwarf im 19. Jahrhundert die Analytical Engine, den ersten mechanischen Computer, auch wenn er nie vollständig gebaut wurde."
    },
    {
      question: "Wer hat die Kernspaltung entdeckt?",
      options: [
        "Otto Hahn",
        "Lise Meitner",
        "Enrico Fermi",
        "Niels Bohr"
      ],
      correctIndex: 0,
      funFact: "Otto Hahn und Lise Meitner entdeckten 1938 die Kernspaltung, wofür Hahn 1944 den Nobelpreis für Chemie erhielt."
    },
    {
      question: "Wer hat das World Wide Web entwickelt?",
      options: [
        "Tim Berners-Lee",
        "Linus Torvalds",
        "Bill Gates",
        "Steve Jobs"
      ],
      correctIndex: 0,
      funFact: "Tim Berners-Lee entwickelte 1989 am CERN das World Wide Web, um Wissenschaftlern den Austausch von Informationen zu erleichtern."
    },
    {
      question: "Wer hat Linux entwickelt?",
      options: [
        "Linus Torvalds",
        "Richard Stallman",
        "Ken Thompson",
        "Dennis Ritchie"
      ],
      correctIndex: 0,
      funFact: "Linus Torvalds veröffentlichte 1991 den Linux-Kernel als freie Software, der heute die Grundlage vieler Betriebssysteme bildet."
    },
    {
      question: "Wer hat die Programmiersprache Java entwickelt?",
      options: [
        "James Gosling",
        "Bjarne Stroustrup",
        "Guido van Rossum",
        "Anders Hejlsberg"
      ],
      correctIndex: 0,
      funFact: "James Gosling entwickelte Java Mitte der 1990er-Jahre bei Sun Microsystems mit dem Ziel, plattformunabhängige Anwendungen zu ermöglichen."
    },
    {
      question: "Wer hat die Programmiersprache Python entwickelt?",
      options: [
        "Guido van Rossum",
        "James Gosling",
        "Rasmus Lerdorf",
        "Brendan Eich"
      ],
      correctIndex: 0,
      funFact: "Guido van Rossum veröffentlichte Python 1991 und legte großen Wert auf Lesbarkeit und Einfachheit der Sprache."
    },
    {
      question: "Wer hat die Programmiersprache C erfunden?",
      options: [
        "Dennis Ritchie",
        "Brian Kernighan",
        "Ken Thompson",
        "Niklaus Wirth"
      ],
      correctIndex: 0,
      funFact: "Dennis Ritchie entwickelte C Anfang der 1970er-Jahre bei Bell Labs, um das Betriebssystem Unix zu schreiben."
    },
    {
      question: "Wer hat die Programmiersprache C++ entwickelt?",
      options: [
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "James Gosling",
        "Guido van Rossum"
      ],
      correctIndex: 0,
      funFact: "Bjarne Stroustrup entwickelte C++ in den 1980er-Jahren als Erweiterung von C mit Objektorientierung."
    },
    {
      question: "Wer hat die Programmiersprache JavaScript entwickelt?",
      options: [
        "Brendan Eich",
        "Rasmus Lerdorf",
        "John Resig",
        "Douglas Crockford"
      ],
      correctIndex: 0,
      funFact: "Brendan Eich entwickelte JavaScript 1995 in nur wenigen Tagen bei Netscape, um Webseiten interaktiver zu machen."
    },
    {
      question: "Wer hat die Programmiersprache PHP entwickelt?",
      options: [
        "Rasmus Lerdorf",
        "Brendan Eich",
        "Guido van Rossum",
        "Linus Torvalds"
      ],
      correctIndex: 0,
      funFact: "Rasmus Lerdorf entwickelte PHP 1994 ursprünglich als Sammlung von CGI-Skripten zur Verwaltung seiner persönlichen Webseite."
    },
    {
      question: "Wer hat die Programmiersprache Swift entwickelt?",
      options: [
        "Chris Lattner",
        "Anders Hejlsberg",
        "James Gosling",
        "Guido van Rossum"
      ],
      correctIndex: 0,
      funFact: "Chris Lattner entwickelte Swift bei Apple und stellte die Sprache 2014 als moderne Alternative zu Objective-C vor."
    },
    {
      question: "Wer hat das Betriebssystem Windows entwickelt?",
      options: [
        "Microsoft",
        "Apple",
        "IBM",
        "Sun Microsystems"
      ],
      correctIndex: 0,
      funFact: "Windows wurde von Microsoft entwickelt und 1985 erstmals als grafische Erweiterung von MS-DOS veröffentlicht."
    },
    {
      question: "Wer hat das Betriebssystem macOS (früher OS X) entwickelt?",
      options: [
        "Apple",
        "Microsoft",
        "IBM",
        "Oracle"
      ],
      correctIndex: 0,
      funFact: "macOS basiert auf NeXTSTEP, einem System, das von der Firma NeXT unter Leitung von Steve Jobs entwickelt wurde."
    },
    {
      question: "Wer hat die Game-Engine Unreal Engine entwickelt?",
      options: [
        "Epic Games",
        "id Software",
        "Valve",
        "Crytek"
      ],
      correctIndex: 0,
      funFact: "Die Unreal Engine wurde von Epic Games für das Spiel 'Unreal' entwickelt und ist heute eine der meistgenutzten Game-Engines."
    },
    {
      question: "Wer hat die Game-Engine Unity entwickelt?",
      options: [
        "Unity Technologies",
        "Epic Games",
        "Electronic Arts",
        "Ubisoft"
      ],
      correctIndex: 0,
      funFact: "Unity wurde 2005 erstmals veröffentlicht und ist besonders bei Indie-Entwicklern für seine Zugänglichkeit beliebt."
    },
    {
      question: "Wer hat den Turing-Test entwickelt?",
      options: [
        "Alan Turing",
        "John von Neumann",
        "Claude Shannon",
        "Norbert Wiener"
      ],
      correctIndex: 0,
      funFact: "Alan Turing beschrieb den nach ihm benannten Turing-Test 1950 als Kriterium dafür, ob eine Maschine als 'intelligent' gelten kann."
    },
    {
      question: "Wer hat die erste Programmiersprache der Geschichte entworfen?",
      options: [
        "Ada Lovelace",
        "Grace Hopper",
        "Charles Babbage",
        "Alan Turing"
      ],
      correctIndex: 0,
      funFact: "Ada Lovelace schrieb im 19. Jahrhundert einen Algorithmus für Babbages Analytical Engine und gilt als erste Programmiererin der Geschichte."
    },
    {
      question: "Wer hat die Programmiersprache COBOL mitentwickelt?",
      options: [
        "Grace Hopper",
        "Ada Lovelace",
        "Barbara Liskov",
        "Margaret Hamilton"
      ],
      correctIndex: 0,
      funFact: "Grace Hopper war maßgeblich an der Entwicklung von COBOL beteiligt, einer frühen Programmiersprache für Geschäftsapplikationen."
    },
    {
      question: "Wer hat das Konzept der objektorientierten Programmierung populär gemacht?",
      options: [
        "Ole-Johan Dahl und Kristen Nygaard",
        "Alan Turing und Alonzo Church",
        "Dennis Ritchie und Ken Thompson",
        "John McCarthy und Marvin Minsky"
      ],
      correctIndex: 0,
      funFact: "Ole-Johan Dahl und Kristen Nygaard entwickelten in den 1960er-Jahren die Sprache Simula, die als erste objektorientierte Sprache gilt."
    },
    {
      question: "Wer hat den Algorithmus zur PageRank-Suche von Google mitentwickelt?",
      options: [
        "Larry Page und Sergey Brin",
        "Bill Gates und Paul Allen",
        "Steve Jobs und Steve Wozniak",
        "Mark Zuckerberg und Dustin Moskovitz"
      ],
      correctIndex: 0,
      funFact: "Larry Page und Sergey Brin entwickelten den PageRank-Algorithmus während ihres Studiums an der Stanford University."
    },
    {
      question: "Wer hat Git erfunden?",
      options: [
        "Linus Torvalds",
        "Guido van Rossum",
        "James Gosling",
        "Ken Thompson"
      ],
      correctIndex: 0,
      funFact: "Linus Torvalds entwickelte Git 2005, um den Quellcode des Linux-Kernels effizient zu verwalten."
    },
    {
      question: "Wer hat die Kryptographie-Methode RSA mitentwickelt?",
      options: [
        "Rivest, Shamir und Adleman",
        "Diffie und Hellman",
        "Shannon und Turing",
        "Euler und Gauss"
      ],
      correctIndex: 0,
      funFact: "Ron Rivest, Adi Shamir und Leonard Adleman veröffentlichten 1977 das RSA-Verschlüsselungsverfahren, das bis heute weit verbreitet ist."
    },
    {
      question: "Wer hat die Blockchain-Technologie mit Bitcoin populär gemacht?",
      options: [
        "Satoshi Nakamoto",
        "Vitalik Buterin",
        "Hal Finney",
        "Nick Szabo"
      ],
      correctIndex: 0,
      funFact: "Unter dem Pseudonym Satoshi Nakamoto wurde 2008 das Bitcoin-Whitepaper veröffentlicht, das die Blockchain-Technologie beschreibt."
    },
    {
      question: "Wer hat das erste iPhone vorgestellt?",
      options: [
        "Steve Jobs",
        "Tim Cook",
        "Bill Gates",
        "Elon Musk"
      ],
      correctIndex: 0,
      funFact: "Steve Jobs präsentierte 2007 das erste iPhone und veränderte damit dauerhaft den Markt für Mobiltelefone."
    },
    {
      question: "Wer hat den ersten modernen Webbrowser Mosaic mitentwickelt?",
      options: [
        "Marc Andreessen",
        "Tim Berners-Lee",
        "Brendan Eich",
        "Linus Torvalds"
      ],
      correctIndex: 0,
      funFact: "Marc Andreessen war einer der Hauptentwickler von Mosaic, einem der ersten populären grafischen Webbrowser."
    }
  ],

  "Wer hat's gesagt?": [
    {
      question: "Wer sagte: 'Ich denke, also bin ich'?",
      options: [
        "Immanuel Kant",
        "René Descartes",
        "Friedrich Nietzsche",
        "Platon"
      ],
      correctIndex: 1,
      funFact: "René Descartes formulierte diesen berühmten Satz (Cogito ergo sum) in seinem Werk 'Meditationen über die Erste Philosophie' (1641)."
    },
    {
      question: "Wer sagte: 'Wenn auch die Fähigkeit zu täuschen ein Zeichen von Scharfsinn und Macht zu sein scheint, so beweist doch die Absicht zu täuschen ohne Zweifel Bosheit oder Schwäche.'?",
      options: [
        "Immanuel Kant",
        "René Descartes",
        "Baruch Spinoza",
        "Gottfried Wilhelm Leibniz"
      ],
      correctIndex: 1,
      funFact: "Dieses Zitat stammt aus René Descartes' 'Discours de la méthode' (1637) und zeigt seine Betonung von Wahrhaftigkeit."
    },
    {
      question: "Wer sagte: 'Der Zweck heiligt die Mittel'?",
      options: [
        "Niccolò Machiavelli",
        "Thomas Hobbes",
        "Jean-Jacques Rousseau",
        "Voltaire"
      ],
      correctIndex: 0,
      funFact: "Dieses Zitat wird oft Niccolò Machiavelli zugeschrieben, obwohl er es nicht genau so formulierte. Es stammt aus seinem Werk 'Der Fürst'."
    },
    {
      question: "Wer sagte: 'Wissen ist Macht'?",
      options: [
        "Francis Bacon",
        "Immanuel Kant",
        "John Locke",
        "David Hume"
      ],
      correctIndex: 0,
      funFact: "Francis Bacon prägte diesen Satz (Scientia potentia est) im 16. Jahrhundert und betonte damit die Bedeutung von Bildung."
    },
    {
      question: "Wer sagte: 'Der Mensch ist dem Menschen ein Wolf'?",
      options: [
        "Thomas Hobbes",
        "Jean-Jacques Rousseau",
        "John Locke",
        "Immanuel Kant"
      ],
      correctIndex: 0,
      funFact: "Thomas Hobbes verwendete dieses Zitat (Homo homini lupus) in seinem Werk 'De Cive' (1642), um die Natur des Menschen zu beschreiben."
    },
    {
      question: "Wer sagte: 'Die Religion ist das Opium des Volkes'?",
      options: [
        "Karl Marx",
        "Friedrich Engels",
        "Max Weber",
        "Émile Durkheim"
      ],
      correctIndex: 0,
      funFact: "Karl Marx schrieb diesen Satz 1843 in seiner 'Kritik der Hegelschen Rechtsphilosophie'."
    },
    {
      question: "Wer sagte: 'Gott ist tot'?",
      options: [
        "Arthur Schopenhauer",
        "Friedrich Nietzsche",
        "Søren Kierkegaard",
        "Martin Heidegger"
      ],
      correctIndex: 1,
      funFact: "Friedrich Nietzsche formulierte diesen provokanten Satz in seinem Werk 'Die fröhliche Wissenschaft' (1882) und 'Also sprach Zarathustra'."
    },
    {
      question: "Wer sagte: 'Sein oder Nichtsein, das ist hier die Frage'?",
      options: [
        "William Shakespeare",
        "Christopher Marlowe",
        "Geoffrey Chaucer",
        "John Milton"
      ],
      correctIndex: 0,
      funFact: "Dieses berühmte Zitat stammt aus Shakespeares 'Hamlet' (um 1600) und ist einer der bekanntesten Monologe der Weltliteratur."
    },
    {
      question: "Wer sagte: 'Ich bin ein Berliner'?",
      options: [
        "Willy Brandt",
        "John F. Kennedy",
        "Ronald Reagan",
        "Winston Churchill"
      ],
      correctIndex: 1,
      funFact: "John F. Kennedy sprach diesen Satz 1963 während seiner Rede in West-Berlin, um Solidarität mit den Berlinern zu zeigen."
    },
    {
      question: "Wer sagte: 'Ich habe einen Traum'?",
      options: [
        "Malcolm X",
        "Martin Luther King Jr.",
        "Rosa Parks",
        "Nelson Mandela"
      ],
      correctIndex: 1,
      funFact: "Martin Luther King Jr. hielt diese berühmte Rede 1963 während des Marsches auf Washington für Arbeit und Freiheit."
    },
    {
      question: "Wer sagte: 'Die Würde des Menschen ist unantastbar'?",
      options: [
        "Immanuel Kant",
        "Johann Gottlieb Fichte",
        "Carlo Schmid",
        "Theodor Heuss"
      ],
      correctIndex: 0,
      funFact: "Dieser Satz wurde von Immanuel Kant geprägt und ist heute als Artikel 1 im Grundgesetz der Bundesrepublik Deutschland verankert."
    },
    {
      question: "Wer sagte: 'Ein Gespenst geht um in Europa - das Gespenst des Kommunismus'?",
      options: [
        "Karl Marx und Friedrich Engels",
        "Wladimir Lenin",
        "Rosa Luxemburg",
        "Leon Trotzki"
      ],
      correctIndex: 0,
      funFact: "Dies ist der erste Satz des 'Manifests der Kommunistischen Partei' (1848) von Karl Marx und Friedrich Engels."
    },
    {
      question: "Wer sagte: 'Ich kam, ich sah, ich siegte'?",
      options: [
        "Julius Caesar",
        "Alexander der Große",
        "Napoleon Bonaparte",
        "Hannibal"
      ],
      correctIndex: 0,
      funFact: "Julius Caesar soll diesen Satz (Veni, vidi, vici) 47 v. Chr. nach einem schnellen Sieg in der Schlacht bei Zela gesagt haben."
    },
    {
      question: "Wer sagte: 'Der Krieg ist die Fortsetzung der Politik mit anderen Mitteln'?",
      options: [
        "Carl von Clausewitz",
        "Sunzi",
        "Niccolò Machiavelli",
        "Friedrich der Große"
      ],
      correctIndex: 0,
      funFact: "Carl von Clausewitz formulierte diesen Satz in seinem Werk 'Vom Kriege' (1832), das bis heute als Standardwerk der Militärtheorie gilt."
    },
    {
      question: "Wer sagte: 'Die Geschichte wiederholt sich nicht, aber sie reimt sich'?",
      options: [
        "Karl Marx",
        "Mark Twain",
        "Winston Churchill",
        "George Santayana"
      ],
      correctIndex: 1,
      funFact: "Dieses Zitat wird Mark Twain zugeschrieben und drückt aus, dass historische Muster ähnlich, aber nicht identisch sind."
    },
    {
      question: "Wer sagte: 'Ich weiß, dass ich nichts weiß'?",
      options: [
        "Platon",
        "Sokrates",
        "Aristoteles",
        "Epikur"
      ],
      correctIndex: 1,
      funFact: "Sokrates soll diesen Satz gesagt haben, um seine Bescheidenheit und sein Streben nach Wissen auszudrücken. Überliefert durch Platon."
    },
    {
      question: "Wer sagte: 'Der Staat bin ich'?",
      options: [
        "Napoleon Bonaparte",
        "Ludwig XIV.",
        "Peter der Große",
        "Friedrich der Große"
      ],
      correctIndex: 1,
      funFact: "Ludwig XIV. von Frankreich soll diesen Satz (L'État, c'est moi) gesagt haben, um seine absolute Macht zu demonstrieren."
    },
    {
      question: "Wer sagte: 'Habe Mut, dich deines eigenen Verstandes zu bedienen'?",
      options: [
        "Immanuel Kant",
        "René Descartes",
        "Voltaire",
        "Jean-Jacques Rousseau"
      ],
      correctIndex: 0,
      funFact: "Immanuel Kant formulierte diesen Satz in seinem Aufsatz 'Beantwortung der Frage: Was ist Aufklärung?' (1784)."
    },
    {
      question: "Wer sagte: 'Die Welt ist alles, was der Fall ist'?",
      options: [
        "Ludwig Wittgenstein",
        "Bertrand Russell",
        "Gottlob Frege",
        "Rudolf Carnap"
      ],
      correctIndex: 0,
      funFact: "Dies ist der erste Satz aus Ludwig Wittgensteins 'Tractatus logico-philosophicus' (1921), einem der wichtigsten Werke der modernen Philosophie."
    },
    {
      question: "Wer sagte: 'Es gibt nichts Gutes, außer man tut es'?",
      options: [
        "Erich Kästner",
        "Bertolt Brecht",
        "Thomas Mann",
        "Hermann Hesse"
      ],
      correctIndex: 0,
      funFact: "Erich Kästner schrieb diesen Satz in seinem Gedicht 'Die Entwicklung der Menschheit' und betonte damit die Bedeutung des Handelns."
    },
    {
      question: "Wer sagte: 'Die Zeit heilt alle Wunden'?",
      options: [
        "Ovid",
        "Cicero",
        "Seneca",
        "Horaz"
      ],
      correctIndex: 0,
      funFact: "Dieses Zitat wird dem römischen Dichter Ovid zugeschrieben und drückt aus, dass Zeit emotionales Leid lindern kann."
    },
    {
      question: "Wer sagte: 'Nur wer die Vergangenheit kennt, hat eine Zukunft'?",
      options: [
        "Wilhelm von Humboldt",
        "Theodor Mommsen",
        "Leopold von Ranke",
        "Johann Gottfried Herder"
      ],
      correctIndex: 0,
      funFact: "Wilhelm von Humboldt betonte damit die Bedeutung der Geschichtswissenschaft für die Entwicklung der Gesellschaft."
    },
    {
      question: "Wer sagte: 'Philosophieren heißt, sich wundern'?",
      options: [
        "Platon",
        "Aristoteles",
        "Sokrates",
        "Descartes"
      ],
      correctIndex: 1,
      funFact: "Aristoteles betonte damit, dass Staunen und Verwunderung der Anfang jeder Philosophie sind."
    },
    {
      question: "Wer sagte: 'Der Mensch ist, was er isst'?",
      options: [
        "Ludwig Feuerbach",
        "Karl Marx",
        "Friedrich Nietzsche",
        "Sigmund Freud"
      ],
      correctIndex: 0,
      funFact: "Ludwig Feuerbach prägte diesen Satz, um den Einfluss der materiellen Lebensbedingungen auf den Menschen zu betonen."
    },
    {
      question: "Wer sagte: 'Cogito, ergo sum' in lateinischer Form?",
      options: [
        "René Descartes",
        "Thomas von Aquin",
        "Augustinus",
        "Spinoza"
      ],
      correctIndex: 0,
      funFact: "René Descartes' lateinische Fassung 'Cogito, ergo sum' wurde weltberühmt und steht für den Vorrang des Denkens."
    },
    {
      question: "Wer sagte: 'Der Mensch ist zur Freiheit verurteilt'?",
      options: [
        "Jean-Paul Sartre",
        "Albert Camus",
        "Martin Heidegger",
        "Søren Kierkegaard"
      ],
      correctIndex: 0,
      funFact: "Jean-Paul Sartre beschrieb mit diesem Satz die radikale Verantwortung des Menschen in der Existenzphilosophie."
    },
    {
      question: "Wer sagte: 'Der Schlaf ist die köstlichste Erfindung'?",
      options: [
        "Heinrich Heine",
        "Johann Wolfgang von Goethe",
        "Friedrich Schiller",
        "Theodor Fontane"
      ],
      correctIndex: 0,
      funFact: "Heinrich Heine äußerte sich oft humorvoll und ironisch über das Leben, unter anderem mit diesem Zitat."
    },
    {
      question: "Wer sagte: 'Humor ist, wenn man trotzdem lacht'?",
      options: [
        "Otto Julius Bierbaum",
        "Vicco von Bülow (Loriot)",
        "Karl Valentin",
        "Heinz Erhardt"
      ],
      correctIndex: 0,
      funFact: "Das Zitat wird häufig Karl Valentin zugeschrieben, stammt aber ursprünglich von Otto Julius Bierbaum."
    },
    {
      question: "Wer sagte: 'Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren'?",
      options: [
        "Bertolt Brecht",
        "Rosa Luxemburg",
        "Willy Brandt",
        "Che Guevara"
      ],
      correctIndex: 0,
      funFact: "Bertolt Brecht formulierte viele politisch motivierte Zitate, die bis heute bekannt sind."
    },
    {
      question: "Wer sagte: 'Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher'?",
      options: [
        "Albert Einstein",
        "Mark Twain",
        "Oscar Wilde",
        "Niels Bohr"
      ],
      correctIndex: 0,
      funFact: "Dieses Zitat wird häufig Albert Einstein zugeschrieben, auch wenn die genaue Quelle umstritten ist."
    },
    {
      question: "Wer sagte: 'Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt'?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Max Planck",
        "Werner Heisenberg"
      ],
      correctIndex: 0,
      funFact: "Einstein betonte mit diesem Satz die Bedeutung von Kreativität in Wissenschaft und Leben."
    },
    {
      question: "Wer sagte: 'Alle Menschen werden Brüder'?",
      options: [
        "Friedrich Schiller",
        "Johann Wolfgang von Goethe",
        "Ludwig van Beethoven",
        "Immanuel Kant"
      ],
      correctIndex: 0,
      funFact: "Die Zeile stammt aus Schillers Gedicht 'Ode an die Freude', das später von Beethoven vertont wurde."
    },
    {
      question: "Wer sagte: 'Das Leben ist zu kurz, um schlechten Wein zu trinken'?",
      options: [
        "Johann Wolfgang von Goethe",
        "Friedrich Schiller",
        "Heinrich Heine",
        "Theodor Fontane"
      ],
      correctIndex: 0,
      funFact: "Goethe war nicht nur Dichter, sondern auch Minister und Naturwissenschaftler – und offenbar Weinliebhaber."
    },
    {
      question: "Wer sagte: 'Wer bin ich – und wenn ja, wie viele?' als Buchtitel?",
      options: [
        "Richard David Precht",
        "Harald Lesch",
        "Peter Sloterdijk",
        "Jürgen Habermas"
      ],
      correctIndex: 0,
      funFact: "Richard David Precht schrieb mit diesem Buch einen populären Einstieg in die Philosophie."
    },
    {
      question: "Wer sagte: 'Der Ball ist rund'?",
      options: [
        "Sepp Herberger",
        "Franz Beckenbauer",
        "Pelé",
        "Johan Cruyff"
      ],
      correctIndex: 0,
      funFact: "Sepp Herberger, deutscher Bundestrainer beim 'Wunder von Bern', ist für viele Fußballweisheiten bekannt."
    },
    {
      question: "Wer sagte: 'Nach dem Spiel ist vor dem Spiel'?",
      options: [
        "Sepp Herberger",
        "Franz Beckenbauer",
        "Udo Lattek",
        "Jupp Heynckes"
      ],
      correctIndex: 0,
      funFact: "Auch dieses berühmte Fußballzitat stammt von Sepp Herberger."
    },
    {
      question: "Wer sagte: 'Möge die Macht mit dir sein'?",
      options: [
        "Obi-Wan Kenobi",
        "Darth Vader",
        "Yoda",
        "Han Solo"
      ],
      correctIndex: 0,
      funFact: "Der Satz stammt aus der 'Star Wars'-Reihe und wurde zuerst von General Dodonna und dann von mehreren Figuren verwendet."
    },
    {
      question: "Wer sagte: 'Houston, wir haben ein Problem'?",
      options: [
        "Jim Lovell",
        "Neil Armstrong",
        "Buzz Aldrin",
        "John Glenn"
      ],
      correctIndex: 0,
      funFact: "Der originale Funkspruch von Apollo 13 lautete etwas anders, wurde aber in dieser Form weltberühmt."
    },
    {
      question: "Wer sagte: 'Ich bin dann mal weg' als Buchtitel?",
      options: [
        "Hape Kerkeling",
        "Harpe Kerkeling",
        "Dieter Bohlen",
        "Mario Barth"
      ],
      correctIndex: 0,
      funFact: "Hape Kerkeling beschreibt in diesem Buch seine Pilgerreise auf dem Jakobsweg."
    },
    {
      question: "Wer sagte: 'Yes we can'?",
      options: [
        "Barack Obama",
        "Bill Clinton",
        "John F. Kennedy",
        "George W. Bush"
      ],
      correctIndex: 0,
      funFact: "Barack Obama nutzte diesen Slogan im US-Präsidentschaftswahlkampf 2008."
    },
    {
      question: "Wer sagte: 'Ich sehe was, was du nicht siehst' als Kinderreim?",
      options: [
        "Unbekannt / Volksgut",
        "Wilhelm Busch",
        "Brüder Grimm",
        "Heinrich Hoffmann"
      ],
      correctIndex: 0,
      funFact: "Viele Sprichwörter und Kinderreime sind anonym überliefert und gelten als Volksgut."
    },
    {
      question: "Wer sagte: 'Alle sagten: Das geht nicht. Dann kam einer, der wusste das nicht, und hat es einfach gemacht'?",
      options: [
        "Unbekannt / Volksweisheit",
        "Albert Einstein",
        "Henry Ford",
        "Thomas Edison"
      ],
      correctIndex: 0,
      funFact: "Dieses Zitat wird vielen Persönlichkeiten zugeschrieben, ist aber wahrscheinlich eine moderne Volksweisheit."
    }
  ],

  "Wer hat's gemacht?": [
    {
      question: "Wer war die erste Person, die die ganze Welt umsegelte?",
      options: [
        "Christoph Kolumbus",
        "Ferdinand Magellan",
        "Vasco da Gama",
        "James Cook"
      ],
      correctIndex: 1,
      funFact: "Ferdinand Magellan startete 1519 die erste Weltumsegelung. Er selbst starb auf den Philippinen, aber seine Mannschaft vollendete die Reise 1522."
    },
    {
      question: "Wer war die erste Person, die den Mount Everest bestieg?",
      options: [
        "Edmund Hillary und Tenzing Norgay",
        "Reinhold Messner",
        "George Mallory",
        "Junko Tabei"
      ],
      correctIndex: 0,
      funFact: "Edmund Hillary (Neuseeland) und Tenzing Norgay (Nepal) erreichten 1953 als erste den Gipfel des Mount Everest."
    },
    {
      question: "Wer war die erste Person, die den Atlantik im Flugzeug überquerte?",
      options: [
        "Charles Lindbergh",
        "Amelia Earhart",
        "Alcock und Brown",
        "Wright Brothers"
      ],
      correctIndex: 2,
      funFact: "John Alcock und Arthur Brown überquerten 1919 als erste den Atlantik nonstop in einem Flugzeug von Neufundland nach Irland."
    },
    {
      question: "Wer war die erste Person, die den Südpol erreichte?",
      options: [
        "Robert Falcon Scott",
        "Roald Amundsen",
        "Ernest Shackleton",
        "Richard Byrd"
      ],
      correctIndex: 1,
      funFact: "Roald Amundsen erreichte 1911 als erster den Südpol, nur wenige Wochen vor seinem Rivalen Robert Falcon Scott."
    },
    {
      question: "Wer war die erste Person, die den Nordpol erreichte?",
      options: [
        "Robert Peary",
        "Frederick Cook",
        "Roald Amundsen",
        "Umberto Nobile"
      ],
      correctIndex: 0,
      funFact: "Robert Peary beanspruchte, 1909 als erster den Nordpol erreicht zu haben, obwohl dies umstritten ist."
    },
    {
      question: "Wer war die erste Person, die den Ärmelkanal durchschwamm?",
      options: [
        "Gertrude Ederle",
        "Matthew Webb",
        "Florence Chadwick",
        "Diana Nyad"
      ],
      correctIndex: 1,
      funFact: "Matthew Webb durchschwamm 1875 als erster den Ärmelkanal von England nach Frankreich in 21 Stunden und 45 Minuten."
    },
    {
      question: "Wer war die erste Person, die den Weltraum betrat?",
      options: [
        "Neil Armstrong",
        "Juri Gagarin",
        "Alan Shepard",
        "John Glenn"
      ],
      correctIndex: 1,
      funFact: "Juri Gagarin war 1961 der erste Mensch im Weltraum und umkreiste die Erde einmal in seiner Wostok-1-Kapsel."
    },
    {
      question: "Wer war die erste Person, die auf dem Mond landete?",
      options: [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Michael Collins",
        "John Glenn"
      ],
      correctIndex: 1,
      funFact: "Neil Armstrong betrat 1969 als erster Mensch den Mond und sprach die berühmten Worte: 'Ein kleiner Schritt für einen Menschen...'"
    },
    {
      question: "Wer war die erste Person, die den Pazifik überquerte?",
      options: [
        "Ferdinand Magellan",
        "James Cook",
        "Vasco Núñez de Balboa",
        "Francisco Pizarro"
      ],
      correctIndex: 0,
      funFact: "Ferdinand Magellan überquerte 1520 als erster Europäer den Pazifik während seiner Weltumsegelung."
    },
    {
      question: "Wer war die erste Person, die den Kilimandscharo bestieg?",
      options: [
        "Hans Meyer",
        "Reinhold Messner",
        "Edmund Hillary",
        "Heinrich Barth"
      ],
      correctIndex: 0,
      funFact: "Hans Meyer erreichte 1889 als erster den Gipfel des Kilimandscharo, des höchsten Bergs Afrikas."
    },
    {
      question: "Wer war die erste Person, die den Grand Canyon durchquerte?",
      options: [
        "John Wesley Powell",
        "Lewis und Clark",
        "Kit Carson",
        "Jedediah Smith"
      ],
      correctIndex: 0,
      funFact: "John Wesley Powell leitete 1869 die erste erfolgreiche Bootsfahrt durch den Grand Canyon auf dem Colorado River."
    },
    {
      question: "Wer war die erste Person, die den Äquator überquerte?",
      options: [
        "Ferdinand Magellan",
        "Vasco da Gama",
        "Bartolomeu Dias",
        "Christoph Kolumbus"
      ],
      correctIndex: 0,
      funFact: "Ferdinand Magellan überquerte während seiner Weltumsegelung 1520 als erster Europäer den Äquator auf einer Ost-West-Route."
    },
    {
      question: "Wer war die erste Person, die den Kanal von Suez durchquerte?",
      options: [
        "Ferdinand de Lesseps",
        "Giuseppe Verdi",
        "Ismail Pascha",
        "Napoleon Bonaparte"
      ],
      correctIndex: 0,
      funFact: "Ferdinand de Lesseps leitete den Bau des Suezkanals, der 1869 eröffnet wurde und Europa mit Asien verbindet."
    },
    {
      question: "Wer war die erste Person, die den Panamakanal durchquerte?",
      options: [
        "Ferdinand de Lesseps",
        "Theodore Roosevelt",
        "George Goethals",
        "John Stevens"
      ],
      correctIndex: 2,
      funFact: "George Goethals vollendete den Bau des Panamakanals, der 1914 eröffnet wurde und den Atlantik mit dem Pazifik verbindet."
    },
    {
      question: "Wer war die erste Person, die den Amazonas von der Quelle bis zur Mündung befuhr?",
      options: [
        "Francisco de Orellana",
        "Percy Fawcett",
        "Theodore Roosevelt",
        "Henry Walter Bates"
      ],
      correctIndex: 0,
      funFact: "Francisco de Orellana durchquerte 1541-1542 als erster Europäer den Amazonas von den Anden bis zur Mündung."
    },
    {
      question: "Wer war die erste Person, die den Nil von der Quelle bis zur Mündung befuhr?",
      options: [
        "John Hanning Speke",
        "David Livingstone",
        "Richard Francis Burton",
        "Henry Morton Stanley"
      ],
      correctIndex: 0,
      funFact: "John Hanning Speke entdeckte 1858 die Quelle des Nils am Viktoriasee und befuhr den Fluss bis zur Mündung."
    },
    {
      question: "Wer war die erste Person, die den Pazifik solo überquerte?",
      options: [
        "Joshua Slocum",
        "Ellen MacArthur",
        "Francis Chichester",
        "Robin Knox-Johnston"
      ],
      correctIndex: 0,
      funFact: "Joshua Slocum vollendete 1898 als erster Mensch eine Solo-Weltumsegelung, die auch den Pazifik einschloss."
    },
    {
      question: "Wer war die erste Person, die den Ärmelkanal im Flugzeug überquerte?",
      options: [
        "Louis Blériot",
        "Charles Lindbergh",
        "Amelia Earhart",
        "Wright Brothers"
      ],
      correctIndex: 0,
      funFact: "Louis Blériot überquerte 1909 als erster den Ärmelkanal in einem Flugzeug von Calais nach Dover."
    },
    {
      question: "Wer war die erste Person, die den Himalaya überquerte?",
      options: [
        "Tenzing Norgay",
        "Reinhold Messner",
        "Maurice Herzog",
        "George Mallory"
      ],
      correctIndex: 2,
      funFact: "Maurice Herzog erreichte 1950 als erster einen Achttausender (Annapurna) und überquerte damit den Himalaya."
    },
    {
      question: "Wer war die erste Person, die den Atlantik solo überquerte?",
      options: [
        "Charles Lindbergh",
        "Amelia Earhart",
        "Alcock und Brown",
        "Francis Chichester"
      ],
      correctIndex: 0,
      funFact: "Charles Lindbergh überquerte 1927 als erster den Atlantik solo nonstop von New York nach Paris in 33,5 Stunden."
    },
    {
      question: "Wer war die erste Person, die den Pazifik mit einem Flugzeug überquerte?",
      options: [
        "Charles Lindbergh",
        "Amelia Earhart",
        "Charles Kingsford Smith",
        "Wiley Post"
      ],
      correctIndex: 2,
      funFact: "Charles Kingsford Smith überquerte 1928 als erster den Pazifik im Flugzeug von Kalifornien nach Australien."
    },
    {
      question: "Wer war die erste Person, die den Arktischen Ozean durchquerte?",
      options: [
        "Roald Amundsen",
        "Fridtjof Nansen",
        "Robert Peary",
        "Umberto Nobile"
      ],
      correctIndex: 1,
      funFact: "Fridtjof Nansen durchquerte 1893-1896 mit seinem Schiff Fram den Arktischen Ozean und trieb im Packeis."
    },
    {
      question: "Wer war die erste Person, die den Indischen Ozean überquerte?",
      options: [
        "Vasco da Gama",
        "Bartolomeu Dias",
        "Pedro Álvares Cabral",
        "Ferdinand Magellan"
      ],
      correctIndex: 0,
      funFact: "Vasco da Gama umsegelte 1497-1499 als erster Europäer Afrika und überquerte den Indischen Ozean nach Indien."
    },
    {
      question: "Wer war die erste Frau im Weltraum?",
      options: [
        "Valentina Tereschkowa",
        "Sally Ride",
        "Mae Jemison",
        "Yelena Kondakova"
      ],
      correctIndex: 0,
      funFact: "Valentina Tereschkowa flog 1963 mit Wostok 6 als erste Frau ins All."
    },
    {
      question: "Wer war der erste Mensch, der alle 14 Achttausender bestiegen hat?",
      options: [
        "Reinhold Messner",
        "Edmund Hillary",
        "Tenzing Norgay",
        "Jerzy Kukuczka"
      ],
      correctIndex: 0,
      funFact: "Reinhold Messner bestieg 1986 als erster Mensch alle 14 Achttausender ohne zusätzlichen Sauerstoff."
    },
    {
      question: "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
      options: [
        "Konrad Adenauer",
        "Willy Brandt",
        "Ludwig Erhard",
        "Helmut Schmidt"
      ],
      correctIndex: 0,
      funFact: "Konrad Adenauer war von 1949 bis 1963 erster Bundeskanzler der BRD."
    },
    {
      question: "Wer war der erste Bundespräsident der Bundesrepublik Deutschland?",
      options: [
        "Theodor Heuss",
        "Heinrich Lübke",
        "Gustav Heinemann",
        "Richard von Weizsäcker"
      ],
      correctIndex: 0,
      funFact: "Theodor Heuss war von 1949 bis 1959 erster Bundespräsident der BRD."
    },
    {
      question: "Wer war der erste Mensch, der den Atlantik allein im Segelboot überquerte?",
      options: [
        "Joshua Slocum",
        "Francis Chichester",
        "Robin Knox-Johnston",
        "Ellen MacArthur"
      ],
      correctIndex: 0,
      funFact: "Joshua Slocum segelte Ende des 19. Jahrhunderts allein um die Welt und überquerte dabei mehrmals den Atlantik."
    },
    {
      question: "Wer war die erste Frau, die den Ärmelkanal durchschwamm?",
      options: [
        "Gertrude Ederle",
        "Florence Chadwick",
        "Diana Nyad",
        "Lynne Cox"
      ],
      correctIndex: 0,
      funFact: "Gertrude Ederle durchschwamm 1926 als erste Frau den Ärmelkanal und brach dabei den Männerrekord."
    },
    {
      question: "Wer war die erste Frau, die allein den Atlantik im Flugzeug überquerte?",
      options: [
        "Amelia Earhart",
        "Beryl Markham",
        "Valentina Tereschkowa",
        "Sally Ride"
      ],
      correctIndex: 0,
      funFact: "Amelia Earhart überquerte 1932 als erste Frau allein den Atlantik im Flugzeug."
    },
    {
      question: "Wer war der erste Mensch, der den Südpol mit dem Flugzeug überflog?",
      options: [
        "Richard Byrd",
        "Roald Amundsen",
        "Ernest Shackleton",
        "Douglas Mawson"
      ],
      correctIndex: 0,
      funFact: "Richard Byrd überflog 1929 als erster den Südpol mit einem Flugzeug."
    },
    {
      question: "Wer war der erste Mensch, der den Nordpol mit dem Flugzeug überflog?",
      options: [
        "Richard Byrd",
        "Roald Amundsen",
        "Umberto Nobile",
        "Charles Lindbergh"
      ],
      correctIndex: 0,
      funFact: "Richard Byrd behauptete, 1926 als erster den Nordpol im Flugzeug überflogen zu haben."
    },
    {
      question: "Wer war der erste Mensch, der solo nonstop die Welt im Segelboot umrundete?",
      options: [
        "Robin Knox-Johnston",
        "Joshua Slocum",
        "Francis Chichester",
        "Ellen MacArthur"
      ],
      correctIndex: 0,
      funFact: "Robin Knox-Johnston umrundete 1968–1969 als erster Mensch die Welt solo nonstop im Segelboot."
    },
    {
      question: "Wer war der erste Mensch, der den New-York-Marathon gewann?",
      options: [
        "Gary Muhrcke",
        "Frank Shorter",
        "Haile Gebrselassie",
        "Eliud Kipchoge"
      ],
      correctIndex: 0,
      funFact: "Gary Muhrcke gewann 1970 den ersten New-York-Marathon, der damals noch im Central Park stattfand."
    },
    {
      question: "Wer war die erste Frau, die den New-York-Marathon gewann?",
      options: [
        "Nina Kuscsik",
        "Grete Waitz",
        "Katherina Switzer",
        "Paula Radcliffe"
      ],
      correctIndex: 0,
      funFact: "Nina Kuscsik gewann 1972 als erste Frau offiziell den New-York-Marathon."
    },
    {
      question: "Wer war der erste Mensch, der einen Marathon unter zwei Stunden lief (inoffiziell)?",
      options: [
        "Eliud Kipchoge",
        "Haile Gebrselassie",
        "Kenenisa Bekele",
        "Paul Tergat"
      ],
      correctIndex: 0,
      funFact: "Eliud Kipchoge lief 2019 in Wien einen Marathon in unter zwei Stunden, allerdings unter nicht wettkampfgültigen Bedingungen."
    },
    {
      question: "Wer war der erste Mensch, der alle Kontinente per Fahrrad bereiste?",
      options: [
        "Heinz Stücke",
        "Thomas Stevens",
        "Mark Beaumont",
        "Felix Starck"
      ],
      correctIndex: 0,
      funFact: "Heinz Stücke aus Deutschland war Jahrzehnte lang mit dem Fahrrad unterwegs und bereiste nahezu alle Länder der Welt."
    },
    {
      question: "Wer war der erste Mensch, der die Rallye Dakar gewann?",
      options: [
        "Cyril Neveu",
        "Ari Vatanen",
        "Stéphane Peterhansel",
        "Carlos Sainz"
      ],
      correctIndex: 0,
      funFact: "Der Franzose Cyril Neveu gewann 1979 die erste Rallye Paris–Dakar auf dem Motorrad."
    },
    {
      question: "Wer war der erste Mensch, der den Jakobsweg in einem Bestsellerbuch populär machte?",
      options: [
        "Hape Kerkeling",
        "Paulo Coelho",
        "Joan Miró",
        "Umberto Eco"
      ],
      correctIndex: 0,
      funFact: "Hape Kerkeling machte mit 'Ich bin dann mal weg' den Jakobsweg im deutschsprachigen Raum besonders populär."
    },
    {
      question: "Wer war der erste Mensch, der die Tiefsee im Marianengraben erreichte?",
      options: [
        "Jacques Piccard und Don Walsh",
        "James Cameron",
        "Robert Ballard",
        "Jacques Cousteau"
      ],
      correctIndex: 0,
      funFact: "Jacques Piccard und Don Walsh tauchten 1960 mit der Trieste in den Marianengraben."
    },
    {
      question: "Wer war der erste Filmregisseur, der einen Film mit Einspielergebnissen über 2 Milliarden US-Dollar drehte?",
      options: [
        "James Cameron",
        "Steven Spielberg",
        "Peter Jackson",
        "George Lucas"
      ],
      correctIndex: 0,
      funFact: "James Camerons 'Titanic' überschritt als erster Film die Marke von 2 Milliarden US-Dollar Einspielergebnis."
    },
    {
      question: "Wer war der erste Mensch, der einen Nobelpreis in zwei verschiedenen Wissenschaftsbereichen erhielt?",
      options: [
        "Marie Curie",
        "Linus Pauling",
        "John Bardeen",
        "Albert Einstein"
      ],
      correctIndex: 0,
      funFact: "Marie Curie erhielt den Nobelpreis für Physik (1903) und für Chemie (1911)."
    },
    {
      question: "Wer war der erste Mensch, der einen Friedensnobelpreis und später den US-Präsidentenposten innehatte?",
      options: [
        "Barack Obama",
        "Theodore Roosevelt",
        "Woodrow Wilson",
        "Jimmy Carter"
      ],
      correctIndex: 1,
      funFact: "Theodore Roosevelt war US-Präsident und erhielt 1906 den Friedensnobelpreis für seine Vermittlung im Russisch-Japanischen Krieg."
    },
    {
      question: "Wer war der erste Mensch, der vom Bundestag zum Bundeskanzler der wiedervereinigten Bundesrepublik gewählt wurde?",
      options: [
        "Helmut Kohl",
        "Gerhard Schröder",
        "Angela Merkel",
        "Konrad Adenauer"
      ],
      correctIndex: 0,
      funFact: "Helmut Kohl wurde 1990 nach der Wiedervereinigung erneut zum Bundeskanzler gewählt."
    },
    {
      question: "Wer war die erste Bundeskanzlerin Deutschlands?",
      options: [
        "Angela Merkel",
        "Ursula von der Leyen",
        "Annalena Baerbock",
        "Herta Däubler-Gmelin"
      ],
      correctIndex: 0,
      funFact: "Angela Merkel war von 2005 bis 2021 Bundeskanzlerin und die erste Frau in diesem Amt."
    },
    {
      question: "Wer war der erste Mensch, der einen Menschenorganismus erfolgreich herztransplantierte?",
      options: [
        "Christiaan Barnard",
        "Michael DeBakey",
        "Andreas Grüntzig",
        "René Favaloro"
      ],
      correctIndex: 0,
      funFact: "Christiaan Barnard führte 1967 in Südafrika die erste erfolgreiche Herztransplantation beim Menschen durch."
    }
  ]
};

const GENERAL_QUESTIONS = [
    {
      question: 'Was ist die Hauptstadt von Frankreich?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rom'],
      correctIndex: 2,
      funFact: 'Paris ist die Hauptstadt und bevölkerungsreichste Stadt Frankreichs.'
    },
    {
      question: 'Welcher Ozean ist der größte?',
      options: ['Atlantik', 'Pazifik', 'Indischer Ozean', 'Arktischer Ozean'],
      correctIndex: 1,
      funFact: 'Der Pazifik bedeckt etwa 30% der Erdoberfläche.'
    },
    {
      question: 'Welcher Fluss ist der längste der Welt?',
      options: ['Nile', 'Amazonas', 'Yangtze', 'Mississippi'],
      correctIndex: 0,
      funFact: 'Der Nil ist mit rund 6650 km Länge der längste Fluss.'
    },
    {
      question: 'Wie heißt der höchste Berg der Erde?',
      options: ['K2', 'Mount Everest', 'Kangchendzönga', 'Lhotse'],
      correctIndex: 1,
      funFact: 'Der Mount Everest ist 8848 m hoch.'
    },
    {
      question: 'Welche Währung hat Japan?',
      options: ['Yen', 'Dollar', 'Euro', 'Pfund'],
      correctIndex: 0,
      funFact: 'Der japanische Yen ist seit 1871 in Gebrauch.'
    },
    {
      question: 'Welches Land hat vier Amtssprachen (Deutsch, Französisch, Italienisch, Rätoromanisch)?',
      options: ['Belgien', 'Schweiz', 'Kanada', 'Südafrika'],
      correctIndex: 1,
      funFact: 'In der Schweiz sind vier Sprachen offiziell.'
    },
    {
      question: 'Welches Land hat keine Hauptstadt?',
      options: ['Vatican City', 'Monaco', 'Nicaragua', 'Luxemburg'],
      correctIndex: 0,
      funFact: 'Der Vatikan ist der kleinste Staat und die Stadt ist zugleich Staat.'
    },
    {
      question: 'Was ist die Hauptstadt von Australien?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      correctIndex: 2,
      funFact: 'Canberra wurde als Kompromiss Hauptstadt.'
    },
    {
      question: 'Welches Land ist flächenmäßig das größte?',
      options: ['Kanada', 'USA', 'China', 'Russland'],
      correctIndex: 3,
      funFact: 'Russland ist mit 17 Mio km² das größte Land.'
    },
    {
      question: 'In welcher Wüste befindet sich der Mount Everest?',
      options: ['Sahara', 'Gobi', 'Antarktis', 'Da nicht in einer Wüste normalerweise'],
      correctIndex: 3,
      funFact: 'Everest liegt im Himalaya, nicht in einer Wüste.'
    },
    {
      question: 'Welches Element hat das chemische Symbol O?',
      options: ['Gold', 'Silber', 'Oxygen', 'Kupfer'],
      correctIndex: 2,
      funFact: 'Sauerstoff hat das Symbol O.'
    },
    {
      question: 'Wie viele Planeten hat unser Sonnensystem?',
      options: ['7', '8', '9', '10'],
      correctIndex: 1,
      funFact: 'Nach der Aberkennung von Pluto sind es 8 Planeten.'
    },
    {
      question: 'Wer malte die Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
      correctIndex: 2,
      funFact: 'Leonardo da Vinci malte die Mona Lisa.'
    },
    {
      question: 'Welche Sprache hat die meisten Muttersprachler?',
      options: ['Englisch', 'Spanisch', 'Arabisch', 'Mandarin'],
      correctIndex: 3,
      funFact: 'Mandarin-Chinesisch hat die meisten Muttersprachler.'
    },
    {
      question: 'Welches Jahr markiert den Beginn des 21. Jahrhunderts?',
      options: ['1999', '2000', '2001', '2002'],
      correctIndex: 2,
      funFact: 'Das 21. Jahrhundert begann 2001.'
    },
    {
      question: 'Was ist die chemische Formel für Wasser?',
      options: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctIndex: 0,
      funFact: 'Wasser ist H2O.'
    },
    {
      question: 'Welches Land gewann die Fußball-Weltmeisterschaft 2014?',
      options: ['Brasilien', 'Deutschland', 'Argentinien', 'Spanien'],
      correctIndex: 1,
      funFact: 'Deutschland gewann 2014 in Brasilien.'
    },
    {
      question: 'Welche Farbe entsteht durch Mischung von Blau und Gelb?',
      options: ['Grün', 'Violett', 'Orange', 'Braun'],
      correctIndex: 0,
      funFact: 'Blau + Gelb ergibt Grün.'
    },
    {
      question: 'Wie viele Kontinente gibt es?',
      options: ['5', '6', '7', '8'],
      correctIndex: 2,
      funFact: 'Erdteile: Afrika, Antarktika, Asien, Europa, Nordamerika, Südamerika, Australien.'
    },
    {
      question: 'Welcher Planet ist der rote Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctIndex: 1,
      funFact: 'Mars wird als roter Planet bezeichnet.'
    },
    {
      question: 'Wer schrieb „Faust“?',
      options: ['Goethe', 'Schiller', 'Brecht', 'Kant'],
      correctIndex: 0,
      funFact: 'Johann Wolfgang von Goethe schrieb Faust.'
    },
    {
      question: 'Welcher Vogel ist bekannt für seinen bunten Schwanz und lauten Ruf?',
      options: ['Spatz', 'Pfau', 'Taube', 'Rabe'],
      correctIndex: 1,
      funFact: 'Der Pfau hat ein prächtiges Rad.'
    },
    {
      question: 'Welche Einheit misst elektrische Stromstärke?',
      options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
      correctIndex: 1,
      funFact: 'Die Einheit ist Ampere.'
    },
    {
      question: 'Welches Gas atmen Menschen zum Leben ein?',
      options: ['Kohlendioxid', 'Sauerstoff', 'Stickstoff', 'Helium'],
      correctIndex: 1,
      funFact: 'Menschen atmen Sauerstoff ein.'
    },
    {
      question: 'Wie heißt das größte Säugetier der Erde?',
      options: ['Elefant', 'Blauwal', 'Giraffe', 'Kuh'],
      correctIndex: 1,
      funFact: 'Der Blauwal ist das größte Tier.'
    },
    {
      question: 'Welcher Kontinent ist hauptsächlich von Wüste bedeckt?',
      options: ['Europa', 'Nordamerika', 'Antarktika', 'Afrika'],
      correctIndex: 3,
      funFact: 'Afrika hat Sahara und andere Wüsten.'
    },
    {
      question: 'Wer entdeckte die Schwerkraft durch einen fallenden Apfel?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo', 'Nikola Tesla'],
      correctIndex: 0,
      funFact: 'Newton beschrieb die Gravitation.'
    },
    {
      question: 'Wie viele Minuten hat eine Stunde?',
      options: ['50', '55', '60', '65'],
      correctIndex: 2,
      funFact: '1 Stunde = 60 Minuten.'
    },
    {
      question: 'Welche Farben hat die deutsche Flagge?',
      options: ['Schwarz-Rot-Gold', 'Grün-Weiß-Rot', 'Blau-Weiß-Rot', 'Schwarz-Weiß-Rot'],
      correctIndex: 0,
      funFact: 'Die deutsche Flagge ist Schwarz-Rot-Gold.'
    },
    {
      question: 'Was ist der längste Fluss Europas?',
      options: ['Donau', 'Wolga', 'Rhein', 'Elbe'],
      correctIndex: 1,
      funFact: 'Die Wolga ist der längste Fluss Europas.'
    },
    {
      question: 'Wie viele Planeten haben Ringe?',
      options: ['1', '2', '3', '4'],
      correctIndex: 3,
      funFact: 'Jupiter, Saturn, Uranus, Neptun haben Ringsysteme.'
    },
    {
      question: 'Welches Land ist bekannt als die „Wiege der Demokratie“?',
      options: ['Rom', 'USA', 'Griechenland', 'England'],
      correctIndex: 2,
      funFact: 'Griechenland, insbesondere Athen.'
    },
    {
      question: 'Welche berühmte Mauer befindet sich in China?',
      options: ['Great Wall', 'Hadrian’s Wall', 'Berliner Mauer', 'Mauer von Adriano'],
      correctIndex: 0,
      funFact: 'Die Chinesische Mauer ist über 21.000 km lang.'
    },
    {
      question: 'Wie viele Nullen hat eine Million?',
      options: ['3', '6', '9', '12'],
      correctIndex: 1,
      funFact: 'Eine Million hat 6 Nullen.'
    },
    {
      question: 'Welches Tier kann den höchsten Sprung ausführen?',
      options: ['Frosch', 'Känguru', 'Grashüpfer', 'Steinbock'],
      correctIndex: 1,
      funFact: 'Kängurus können sehr hoch springen.'
    },
    {
      question: 'Was ist die häufigste Blutgruppe weltweit?',
      options: ['A', 'B', 'AB', '0'],
      correctIndex: 3,
      funFact: '0 positiv ist sehr häufig.'
    },
    {
      question: 'Wie viele Tasten hat ein Standardklavier?',
      options: ['76', '80', '88', '92'],
      correctIndex: 2,
      funFact: 'Ein Standardklavier hat 88 Tasten.'
    },
    {
      question: 'Welches Instrument ist eine Holzblasinstrumente?',
      options: ['Violine', 'Oboe', 'Trompete', 'Trommel'],
      correctIndex: 1,
      funFact: 'Oboe ist Holzblasinstrument.'
    },
    {
      question: 'Welches Land ist Herkunftsland von Sushi?',
      options: ['China', 'Korea', 'Japan', 'Thailand'],
      correctIndex: 2,
      funFact: 'Sushi stammt aus Japan.'
    },
    {
      question: 'Welches Land holte Tennis-Großerfolg durch Roger Federer?',
      options: ['USA', 'Schweiz', 'Spanien', 'Australien'],
      correctIndex: 1,
      funFact: 'Roger Federer ist Schweizer.'
    },
    {
      question: 'In welchem Sport fährt man Eishockey?',
      options: ['Basketball', 'Eishockey', 'Fußball', 'Rugby'],
      correctIndex: 1,
      funFact: 'Eishockey wird auf Eis gespielt.'
    },
    {
      question: 'Welcher Künstler malte die Sternennacht?',
      options: ['Van Gogh', 'Da Vinci', 'Picasso', 'Monet'],
      correctIndex: 0,
      funFact: 'Vincent van Gogh malte Starry Night.'
    },
    {
      question: 'Welches Material verwendet man für Glas hauptsächlich?',
      options: ['Holz', 'Sand', 'Metall', 'Kunststoff'],
      correctIndex: 1,
      funFact: 'Glas wird aus Quarzsand hergestellt.'
    },
    {
      question: 'Wie heißt die kleinste Einheit digitaler Informationen?',
      options: ['Byte', 'Bit', 'Nibble', 'Kilobyte'],
      correctIndex: 1,
      funFact: 'Eine Bit ist ein binäres Digit.'
    },
];

["Geographie", "Musik", "Filme", "Sport", "Kunst"].forEach(category => {
  QUESTIONS[category] = GENERAL_QUESTIONS;
});


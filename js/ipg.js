function resultadoipg(){
var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80;
var p1d, p2d, p3d, p4d, p5d, p6d, p7d, p8d, p9d, p10d, p11d, p12d, p13d, p14d, p15d, p16d, p17d, p18d, p19d, p20d, p21d, p22d, p23d, p24d, p25d, p26d, p27d, p28d, p29d, p30d, p31d, p32d, p33d, p34d, p35d, p36d, p37d, p38d, p39d, p40d,p41d, p42d, p43d, p44d, p45d, p46d, p47d, p48d, p49d, p50d, p51d, p52d, p53d, p54d, p55d, p56d, p57d, p58d, p59d, p60d, p61d, p62d, p63d, p64d, p65d, p66d, p67d, p68d, p69d, p70d, p71d, p72d, p73d, p74d, p75d, p76d, p77d, p78d, p79d, p80d;
var p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97, p98, p99, p100, p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p115, p116, p117, p118, p119, p120,p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134, p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148, p149, p150, p151, p152, p153, p154, p155, p156, p157, p158, p159, p160, ASR, AS, AS2, RES, RES2, RESR, EST, EST2, ESTR, SOC, SOC2, SOCR, AUTOESTIMA, CAU,CAU2,CAUR, ORI, ORI2, ORIR, COMP,COMP2,COMPR, VIT,VIT2,VITR, SEX;
var p81d, p82d, p83d, p84d, p85d, p86d, p87d, p88d, p89d, p90d, p91d, p92d, p93d, p94d, p95d, p96d, p97d, p98d, p99d, p100d, p101d, p102d, p103d, p104d, p105d, p106d, p107d, p108d, p109d, p110d, p111d, p112d, p113d, p114d, p115d, p116d, p117d, p118d, p119d, p120d,p121d, p122d, p123d, p124d, p125d, p126d, p127d, p128d, p129d, p130d, p131d, p132d, p133d, p134d, p135d, p136d, p137d, p138d, p139d, p140d, p141d, p142d, p143d, p144d, p145d, p146d, p147d, p148d, p149d, p150d, p151d, p152d, p153d, p154d, p155d, p156d, p157d, p158d, p159d, p160d;

if (document.getElementById('sexo').checked==true){SEX=1}
else{SEX=0}
if (document.getElementById('1a').checked==true) {p1=1}
else {p1=0}
if (document.getElementById('1b').checked==true) {p2=1}
else {p2=0}
if (document.getElementById('1c').checked==true) {p3=1}
else {p3=0}
if (document.getElementById('1d').checked==true) {p4=1}
else {p4=0}
if (document.getElementById('1ad').checked==true) {p1d=1}
else {p1d=0}
if (document.getElementById('1bd').checked==true) {p2d=1}
else {p2d=0}
if (document.getElementById('1cd').checked==true) {p3d=1}
else {p3d=0}
if (document.getElementById('1dd').checked==true) {p4d=1}
else {p4d=0}
if (document.getElementById('2a').checked==true) {p5=1}
else {p5=0}
if (document.getElementById('2b').checked==true) {p6=1}
else {p6=0}
if (document.getElementById('2c').checked==true) {p7=1}
else {p7=0}
if (document.getElementById('2d').checked==true) {p8=1}
else {p8=0}
if (document.getElementById('2ad').checked==true) {p5d=1}
else {p5d=0}
if (document.getElementById('2bd').checked==true) {p6d=1}
else {p6d=0}
if (document.getElementById('2cd').checked==true) {p7d=1}
else {p7d=0}
if (document.getElementById('2dd').checked==true) {p8d=1}
else {p8d=0}
if (document.getElementById('3a').checked==true) {p9=1}
else {p9=0}
if (document.getElementById('3b').checked==true) {p10=1}
else {p10=0}
if (document.getElementById('3c').checked==true) {p11=1}
else {p11=0}
if (document.getElementById('3d').checked==true) {p12=1}
else {p12=0}
if (document.getElementById('3ad').checked==true) {p9d=1}
else {p9d=0}
if (document.getElementById('3bd').checked==true) {p10d=1}
else {p10d=0}
if (document.getElementById('3cd').checked==true) {p11d=1}
else {p11d=0}
if (document.getElementById('3dd').checked==true) {p12d=1}
else {p12d=0}
if (document.getElementById('4a').checked==true) {p13=1}
else {p13=0}
if (document.getElementById('4b').checked==true) {p14=1}
else {p14=0}
if (document.getElementById('4c').checked==true) {p15=1}
else {p15=0}
if (document.getElementById('4d').checked==true) {p16=1}
else {p16=0}
if (document.getElementById('4ad').checked==true) {p13d=1}
else {p13d=0}
if (document.getElementById('4bd').checked==true) {p14d=1}
else {p14d=0}
if (document.getElementById('4cd').checked==true) {p15d=1}
else {p15d=0}
if (document.getElementById('4dd').checked==true) {p16d=1}
else {p16d=0}
if (document.getElementById('5a').checked==true) {p17=1}
else {p17=0}
if (document.getElementById('5b').checked==true) {p18=1}
else {p18=0}
if (document.getElementById('5c').checked==true) {p19=1}
else {p19=0}
if (document.getElementById('5d').checked==true) {p20=1}
else {p20=0}
if (document.getElementById('5ad').checked==true) {p17d=1}
else {p17d=0}
if (document.getElementById('5bd').checked==true) {p18d=1}
else {p18d=0}
if (document.getElementById('5cd').checked==true) {p19d=1}
else {p19d=0}
if (document.getElementById('5dd').checked==true) {p20d=1}
else {p20d=0}
if (document.getElementById('6a').checked==true) {p21=1}
else {p21=0}
if (document.getElementById('6b').checked==true) {p22=1}
else {p22=0}
if (document.getElementById('6c').checked==true) {p23=1}
else {p23=0}
if (document.getElementById('6d').checked==true) {p24=1}
else {p24=0}
if (document.getElementById('6ad').checked==true) {p21d=1}
else {p21d=0}
if (document.getElementById('6bd').checked==true) {p22d=1}
else {p22d=0}
if (document.getElementById('6cd').checked==true) {p23d=1}
else {p23d=0}
if (document.getElementById('6dd').checked==true) {p24d=1}
else {p24d=0}
if (document.getElementById('7a').checked==true) {p25=1}
else {p25=0}
if (document.getElementById('7b').checked==true) {p26=1}
else {p26=0}
if (document.getElementById('7c').checked==true) {p27=1}
else {p27=0}
if (document.getElementById('7d').checked==true) {p28=1}
else {p28=0}
if (document.getElementById('7ad').checked==true) {p25d=1}
else {p25d=0}
if (document.getElementById('7bd').checked==true) {p26d=1}
else {p26d=0}
if (document.getElementById('7cd').checked==true) {p27d=1}
else {p27d=0}
if (document.getElementById('7dd').checked==true) {p28d=1}
else {p28d=0}
if (document.getElementById('8a').checked==true) {p29=1}
else {p29=0}
if (document.getElementById('8b').checked==true) {p30=1}
else {p30=0}
if (document.getElementById('8c').checked==true) {p31=1}
else {p31=0}
if (document.getElementById('8d').checked==true) {p32=1}
else {p32=0}
if (document.getElementById('8ad').checked==true) {p29d=1}
else {p29d=0}
if (document.getElementById('8bd').checked==true) {p30d=1}
else {p30d=0}
if (document.getElementById('8cd').checked==true) {p31d=1}
else {p31d=0}
if (document.getElementById('8dd').checked==true) {p32d=1}
else {p32d=0}
if (document.getElementById('9a').checked==true) {p33=1}
else {p33=0}
if (document.getElementById('9b').checked==true) {p34=1}
else {p34=0}
if (document.getElementById('9c').checked==true) {p35=1}
else {p35=0}
if (document.getElementById('9d').checked==true) {p36=1}
else {p36=0}
if (document.getElementById('9ad').checked==true) {p33d=1}
else {p33d=0}
if (document.getElementById('9bd').checked==true) {p34d=1}
else {p34d=0}
if (document.getElementById('9cd').checked==true) {p35d=1}
else {p35d=0}
if (document.getElementById('9dd').checked==true) {p36d=1}
else {p36d=0}
if (document.getElementById('10a').checked==true) {p37=1}
else {p37=0}
if (document.getElementById('10b').checked==true) {p38=1}
else {p38=0}
if (document.getElementById('10c').checked==true) {p39=1}
else {p39=0}
if (document.getElementById('10d').checked==true) {p40=1}
else {p40=0}
if (document.getElementById('10ad').checked==true) {p37d=1}
else {p37d=0}
if (document.getElementById('10bd').checked==true) {p38d=1}
else {p38d=0}
if (document.getElementById('10cd').checked==true) {p39d=1}
else {p39d=0}
if (document.getElementById('10dd').checked==true) {p40d=1}
else {p40d=0}
if (document.getElementById('11a').checked==true) {p41=1}
else {p41=0}
if (document.getElementById('11b').checked==true) {p42=1}
else {p42=0}
if (document.getElementById('11c').checked==true) {p43=1}
else {p43=0}
if (document.getElementById('11d').checked==true) {p44=1}
else {p44=0}
if (document.getElementById('11ad').checked==true) {p41d=1}
else {p41d=0}
if (document.getElementById('11bd').checked==true) {p42d=1}
else {p42d=0}
if (document.getElementById('11cd').checked==true) {p43d=1}
else {p43d=0}
if (document.getElementById('11dd').checked==true) {p44d=1}
else {p44d=0}
if (document.getElementById('12a').checked==true) {p45=1}
else {p45=0}
if (document.getElementById('12b').checked==true) {p46=1}
else {p46=0}
if (document.getElementById('12c').checked==true) {p47=1}
else {p47=0}
if (document.getElementById('12d').checked==true) {p48=1}
else {p48=0}
if (document.getElementById('12ad').checked==true) {p45d=1}
else {p45d=0}
if (document.getElementById('12bd').checked==true) {p46d=1}
else {p46d=0}
if (document.getElementById('12cd').checked==true) {p47d=1}
else {p47d=0}
if (document.getElementById('12dd').checked==true) {p48d=1}
else {p48d=0}
if (document.getElementById('13a').checked==true) {p49=1}
else {p49=0}
if (document.getElementById('13b').checked==true) {p50=1}
else {p50=0}
if (document.getElementById('13c').checked==true) {p51=1}
else {p51=0}
if (document.getElementById('13d').checked==true) {p52=1}
else {p52=0}
if (document.getElementById('13ad').checked==true) {p49d=1}
else {p49d=0}
if (document.getElementById('13bd').checked==true) {p50d=1}
else {p50d=0}
if (document.getElementById('13cd').checked==true) {p51d=1}
else {p51d=0}
if (document.getElementById('13dd').checked==true) {p52d=1}
else {p52d=0}
if (document.getElementById('14a').checked==true) {p53=1}
else {p53=0}
if (document.getElementById('14b').checked==true) {p54=1}
else {p54=0}
if (document.getElementById('14c').checked==true) {p55=1}
else {p55=0}
if (document.getElementById('14d').checked==true) {p56=1}
else {p56=0}
if (document.getElementById('14ad').checked==true) {p53d=1}
else {p53d=0}
if (document.getElementById('14bd').checked==true) {p54d=1}
else {p54d=0}
if (document.getElementById('14cd').checked==true) {p55d=1}
else {p55d=0}
if (document.getElementById('14dd').checked==true) {p56d=1}
else {p56d=0}
if (document.getElementById('15a').checked==true) {p57=1}
else {p57=0}
if (document.getElementById('15b').checked==true) {p58=1}
else {p58=0}
if (document.getElementById('15c').checked==true) {p59=1}
else {p59=0}
if (document.getElementById('15d').checked==true) {p60=1}
else {p60=0}
if (document.getElementById('15ad').checked==true) {p57d=1}
else {p57d=0}
if (document.getElementById('15bd').checked==true) {p58d=1}
else {p58d=0}
if (document.getElementById('15cd').checked==true) {p59d=1}
else {p59d=0}
if (document.getElementById('15dd').checked==true) {p60d=1}
else {p60d=0}
if (document.getElementById('16a').checked==true) {p61=1}
else {p61=0}
if (document.getElementById('16b').checked==true) {p62=1}
else {p62=0}
if (document.getElementById('16c').checked==true) {p63=1}
else {p63=0}
if (document.getElementById('16d').checked==true) {p64=1}
else {p64=0}
if (document.getElementById('16ad').checked==true) {p61d=1}
else {p61d=0}
if (document.getElementById('16bd').checked==true) {p62d=1}
else {p62d=0}
if (document.getElementById('16cd').checked==true) {p63d=1}
else {p63d=0}
if (document.getElementById('16dd').checked==true) {p64d=1}
else {p64d=0}
if (document.getElementById('17a').checked==true) {p65=1}
else {p65=0}
if (document.getElementById('17b').checked==true) {p66=1}
else {p66=0}
if (document.getElementById('17c').checked==true) {p67=1}
else {p67=0}
if (document.getElementById('17d').checked==true) {p68=1}
else {p68=0}
if (document.getElementById('17ad').checked==true) {p65d=1}
else {p65d=0}
if (document.getElementById('17bd').checked==true) {p66d=1}
else {p66d=0}
if (document.getElementById('17cd').checked==true) {p67d=1}
else {p67d=0}
if (document.getElementById('17dd').checked==true) {p68d=1}
else {p68d=0}
if (document.getElementById('18a').checked==true) {p69=1}
else {p69=0}
if (document.getElementById('18b').checked==true) {p70=1}
else {p70=0}
if (document.getElementById('18c').checked==true) {p71=1}
else {p71=0}
if (document.getElementById('18d').checked==true) {p72=1}
else {p72=0}
if (document.getElementById('18ad').checked==true) {p69d=1}
else {p69d=0}
if (document.getElementById('18bd').checked==true) {p70d=1}
else {p70d=0}
if (document.getElementById('18cd').checked==true) {p71d=1}
else {p71d=0}
if (document.getElementById('18dd').checked==true) {p72d=1}
else {p72d=0}
if (document.getElementById('19a').checked==true) {p73=1}
else {p73=0}
if (document.getElementById('19b').checked==true) {p74=1}
else {p74=0}
if (document.getElementById('19c').checked==true) {p75=1}
else {p75=0}
if (document.getElementById('19d').checked==true) {p76=1}
else {p76=0}
if (document.getElementById('19ad').checked==true) {p73d=1}
else {p73d=0}
if (document.getElementById('19bd').checked==true) {p74d=1}
else {p74d=0}
if (document.getElementById('19cd').checked==true) {p75d=1}
else {p75d=0}
if (document.getElementById('19dd').checked==true) {p76d=1}
else {p76d=0}
if (document.getElementById('20a').checked==true) {p77=1}
else {p77=0}
if (document.getElementById('20b').checked==true) {p78=1}
else {p78=0}
if (document.getElementById('20c').checked==true) {p79=1}
else {p79=0}
if (document.getElementById('20d').checked==true) {p80=1}
else {p80=0}
if (document.getElementById('20ad').checked==true) {p77d=1}
else {p77d=0}
if (document.getElementById('20bd').checked==true) {p78d=1}
else {p78d=0}
if (document.getElementById('20cd').checked==true) {p79d=1}
else {p79d=0}
if (document.getElementById('20dd').checked==true) {p80d=1}
else {p80d=0}
if (document.getElementById('21a').checked==true) {p81=1}
else {p81=0}
if (document.getElementById('21b').checked==true) {p82=1}
else {p82=0}
if (document.getElementById('21c').checked==true) {p83=1}
else {p83=0}
if (document.getElementById('21d').checked==true) {p84=1}
else {p84=0}
if (document.getElementById('21ad').checked==true) {p81d=1}
else {p81d=0}
if (document.getElementById('21bd').checked==true) {p82d=1}
else {p82d=0}
if (document.getElementById('21cd').checked==true) {p83d=1}
else {p83d=0}
if (document.getElementById('21dd').checked==true) {p84d=1}
else {p84d=0}
if (document.getElementById('22a').checked==true) {p85=1}
else {p85=0}
if (document.getElementById('22b').checked==true) {p86=1}
else {p86=0}
if (document.getElementById('22c').checked==true) {p87=1}
else {p87=0}
if (document.getElementById('22d').checked==true) {p88=1}
else {p88=0}
if (document.getElementById('22ad').checked==true) {p85d=1}
else {p85d=0}
if (document.getElementById('22bd').checked==true) {p86d=1}
else {p86d=0}
if (document.getElementById('22cd').checked==true) {p87d=1}
else {p87d=0}
if (document.getElementById('22dd').checked==true) {p88d=1}
else {p88d=0}
if (document.getElementById('23a').checked==true) {p89=1}
else {p89=0}
if (document.getElementById('23b').checked==true) {p90=1}
else {p90=0}
if (document.getElementById('23c').checked==true) {p91=1}
else {p91=0}
if (document.getElementById('23d').checked==true) {p92=1}
else {p92=0}
if (document.getElementById('23ad').checked==true) {p89d=1}
else {p89d=0}
if (document.getElementById('23bd').checked==true) {p90d=1}
else {p90d=0}
if (document.getElementById('23cd').checked==true) {p91d=1}
else {p91d=0}
if (document.getElementById('23dd').checked==true) {p92d=1}
else {p92d=0}
if (document.getElementById('24a').checked==true) {p93=1}
else {p93=0}
if (document.getElementById('24b').checked==true) {p94=1}
else {p94=0}
if (document.getElementById('24c').checked==true) {p95=1}
else {p95=0}
if (document.getElementById('24d').checked==true) {p96=1}
else {p96=0}
if (document.getElementById('24ad').checked==true) {p93d=1}
else {p93d=0}
if (document.getElementById('24bd').checked==true) {p94d=1}
else {p94d=0}
if (document.getElementById('24cd').checked==true) {p95d=1}
else {p95d=0}
if (document.getElementById('24dd').checked==true) {p96d=1}
else {p96d=0}
if (document.getElementById('25a').checked==true) {p97=1}
else {p97=0}
if (document.getElementById('25b').checked==true) {p98=1}
else {p98=0}
if (document.getElementById('25c').checked==true) {p99=1}
else {p99=0}
if (document.getElementById('25d').checked==true) {p100=1}
else {p100=0}
if (document.getElementById('25ad').checked==true) {p97d=1}
else {p97d=0}
if (document.getElementById('25bd').checked==true) {p98d=1}
else {p98d=0}
if (document.getElementById('25cd').checked==true) {p99d=1}
else {p99d=0}
if (document.getElementById('25dd').checked==true) {p100d=1}
else {p100d=0}
if (document.getElementById('26a').checked==true) {p101=1}
else {p101=0}
if (document.getElementById('26b').checked==true) {p102=1}
else {p102=0}
if (document.getElementById('26c').checked==true) {p103=1}
else {p103=0}
if (document.getElementById('26d').checked==true) {p104=1}
else {p104=0}
if (document.getElementById('26ad').checked==true) {p101d=1}
else {p101d=0}
if (document.getElementById('26bd').checked==true) {p102d=1}
else {p102d=0}
if (document.getElementById('26cd').checked==true) {p103d=1}
else {p103d=0}
if (document.getElementById('26dd').checked==true) {p104d=1}
else {p104d=0}
if (document.getElementById('27a').checked==true) {p105=1}
else {p105=0}
if (document.getElementById('27b').checked==true) {p106=1}
else {p106=0}
if (document.getElementById('27c').checked==true) {p107=1}
else {p107=0}
if (document.getElementById('27d').checked==true) {p108=1}
else {p108=0}
if (document.getElementById('27ad').checked==true) {p105d=1}
else {p105d=0}
if (document.getElementById('27bd').checked==true) {p106d=1}
else {p106d=0}
if (document.getElementById('27cd').checked==true) {p107d=1}
else {p107d=0}
if (document.getElementById('27dd').checked==true) {p108d=1}
else {p108d=0}
if (document.getElementById('28a').checked==true) {p109=1}
else {p109=0}
if (document.getElementById('28b').checked==true) {p110=1}
else {p110=0}
if (document.getElementById('28c').checked==true) {p111=1}
else {p111=0}
if (document.getElementById('28d').checked==true) {p112=1}
else {p112=0}
if (document.getElementById('28ad').checked==true) {p109d=1}
else {p109d=0}
if (document.getElementById('28bd').checked==true) {p110d=1}
else {p110d=0}
if (document.getElementById('28cd').checked==true) {p111d=1}
else {p111d=0}
if (document.getElementById('28dd').checked==true) {p112d=1}
else {p112d=0}
if (document.getElementById('29a').checked==true) {p113=1}
else {p113=0}
if (document.getElementById('29b').checked==true) {p114=1}
else {p114=0}
if (document.getElementById('29c').checked==true) {p115=1}
else {p115=0}
if (document.getElementById('29d').checked==true) {p116=1}
else {p116=0}
if (document.getElementById('29ad').checked==true) {p113d=1}
else {p113d=0}
if (document.getElementById('29bd').checked==true) {p114d=1}
else {p114d=0}
if (document.getElementById('29cd').checked==true) {p115d=1}
else {p115d=0}
if (document.getElementById('29dd').checked==true) {p116d=1}
else {p116d=0}
if (document.getElementById('30a').checked==true) {p117=1}
else {p117=0}
if (document.getElementById('30b').checked==true) {p118=1}
else {p118=0}
if (document.getElementById('30c').checked==true) {p119=1}
else {p119=0}
if (document.getElementById('30d').checked==true) {p120=1}
else {p120=0}
if (document.getElementById('30ad').checked==true) {p117d=1}
else {p117d=0}
if (document.getElementById('30bd').checked==true) {p118d=1}
else {p118d=0}
if (document.getElementById('30cd').checked==true) {p119d=1}
else {p119d=0}
if (document.getElementById('30dd').checked==true) {p120d=1}
else {p120d=0}
if (document.getElementById('31a').checked==true) {p121=1}
else {p121=0}
if (document.getElementById('31b').checked==true) {p122=1}
else {p122=0}
if (document.getElementById('31c').checked==true) {p123=1}
else {p123=0}
if (document.getElementById('31d').checked==true) {p124=1}
else {p124=0}
if (document.getElementById('31ad').checked==true) {p121d=1}
else {p121d=0}
if (document.getElementById('31bd').checked==true) {p122d=1}
else {p122d=0}
if (document.getElementById('31cd').checked==true) {p123d=1}
else {p123d=0}
if (document.getElementById('31dd').checked==true) {p124d=1}
else {p124d=0}
if (document.getElementById('32a').checked==true) {p125=1}
else {p125=0}
if (document.getElementById('32b').checked==true) {p126=1}
else {p126=0}
if (document.getElementById('32c').checked==true) {p127=1}
else {p127=0}
if (document.getElementById('32d').checked==true) {p128=1}
else {p128=0}
if (document.getElementById('32ad').checked==true) {p125d=1}
else {p125d=0}
if (document.getElementById('32bd').checked==true) {p126d=1}
else {p126d=0}
if (document.getElementById('32cd').checked==true) {p127d=1}
else {p127d=0}
if (document.getElementById('32dd').checked==true) {p128d=1}
else {p128d=0}
if (document.getElementById('33a').checked==true) {p129=1}
else {p129=0}
if (document.getElementById('33b').checked==true) {p130=1}
else {p130=0}
if (document.getElementById('33c').checked==true) {p131=1}
else {p131=0}
if (document.getElementById('33d').checked==true) {p132=1}
else {p132=0}
if (document.getElementById('33ad').checked==true) {p129d=1}
else {p129d=0}
if (document.getElementById('33bd').checked==true) {p130d=1}
else {p130d=0}
if (document.getElementById('33cd').checked==true) {p131d=1}
else {p131d=0}
if (document.getElementById('33dd').checked==true) {p132d=1}
else {p132d=0}
if (document.getElementById('34a').checked==true) {p133=1}
else {p133=0}
if (document.getElementById('34b').checked==true) {p134=1}
else {p134=0}
if (document.getElementById('34c').checked==true) {p135=1}
else {p135=0}
if (document.getElementById('34d').checked==true) {p136=1}
else {p136=0}
if (document.getElementById('34ad').checked==true) {p133d=1}
else {p133d=0}
if (document.getElementById('34bd').checked==true) {p134d=1}
else {p134d=0}
if (document.getElementById('34cd').checked==true) {p135d=1}
else {p135d=0}
if (document.getElementById('34dd').checked==true) {p136d=1}
else {p136d=0}
if (document.getElementById('35a').checked==true) {p137=1}
else {p137=0}
if (document.getElementById('35b').checked==true) {p138=1}
else {p138=0}
if (document.getElementById('35c').checked==true) {p139=1}
else {p139=0}
if (document.getElementById('35d').checked==true) {p140=1}
else {p140=0}
if (document.getElementById('35ad').checked==true) {p137d=1}
else {p137d=0}
if (document.getElementById('35bd').checked==true) {p138d=1}
else {p138d=0}
if (document.getElementById('35cd').checked==true) {p139d=1}
else {p139d=0}
if (document.getElementById('35dd').checked==true) {p140d=1}
else {p140d=0}
if (document.getElementById('36a').checked==true) {p141=1}
else {p141=0}
if (document.getElementById('36b').checked==true) {p142=1}
else {p142=0}
if (document.getElementById('36c').checked==true) {p143=1}
else {p143=0}
if (document.getElementById('36d').checked==true) {p144=1}
else {p144=0}
if (document.getElementById('36ad').checked==true) {p141d=1}
else {p141d=0}
if (document.getElementById('36bd').checked==true) {p142d=1}
else {p142d=0}
if (document.getElementById('36cd').checked==true) {p143d=1}
else {p143d=0}
if (document.getElementById('36dd').checked==true) {p144d=1}
else {p144d=0}
if (document.getElementById('37a').checked==true) {p145=1}
else {p145=0}
if (document.getElementById('37b').checked==true) {p146=1}
else {p146=0}
if (document.getElementById('37c').checked==true) {p147=1}
else {p147=0}
if (document.getElementById('37d').checked==true) {p148=1}
else {p148=0}
if (document.getElementById('37ad').checked==true) {p145d=1}
else {p145d=0}
if (document.getElementById('37bd').checked==true) {p146d=1}
else {p146d=0}
if (document.getElementById('37cd').checked==true) {p147d=1}
else {p147d=0}
if (document.getElementById('37dd').checked==true) {p148d=1}
else {p148d=0}
if (document.getElementById('38a').checked==true) {p149=1}
else {p149=0}
if (document.getElementById('38b').checked==true) {p150=1}
else {p150=0}
if (document.getElementById('38c').checked==true) {p151=1}
else {p151=0}
if (document.getElementById('38d').checked==true) {p152=1}
else {p152=0}
if (document.getElementById('38ad').checked==true) {p149d=1}
else {p149d=0}
if (document.getElementById('38bd').checked==true) {p150d=1}
else {p150d=0}
if (document.getElementById('38cd').checked==true) {p151d=1}
else {p151d=0}
if (document.getElementById('38dd').checked==true) {p152d=1}
else {p152d=0}

AS=p1+p2d+p3+p4+p5d+p6d+p7d+p8+p9d+p10+p11d+p12d+p13+p14+p15d+p16+p17+p18d+p19d+p20d+p21d+p22d+p23d+p24+p25+p26+p27d+p28+p29+p30d+p31d+p32d+p33d+p34+p35d+p36d;
AS2=p37+p38d+p39d+p40d+p41d+p42+p43d+p44d+p45d+p46+p47+p48+p49d+p50d+p51d+p52+p53+p54d+p55+p56+p57+p58d+p59d+p60d+p61+p62+p63+p64d+p65d+p66d+p67d+p68+p69+p70+p71d+p72;
RES=p1d+p2d+p3+p4d+p5+p6+p7d+p8+p9d+p10d+p11d+p12+p13+p14d+p15+p16+p17d+p18d+p19d+p20+p21+p22d+p23+p24+p25+p26d+p27d+p28d+p29d+p30+p31d+p32d+p33d+p34d+p35+p36d;
RES2=p37d+p38d+p39+p40d+p41d+p42d+p43d+p44+p45+p46d+p47+p48+p49+p50d+p51+p52+p53d+p54d+p55d+p56+p57d+p58d+p59d+p60+p61+p62d+p63+p64+p65+p66d+p67d+p68d+p69+p70d+p71d+p72d;
EST=p1+p2+p3+p4d+p5d+p6+p7d+p8d+p9d+p10+p11+p12+p13d+p14d+p15d+p16+p17+p18+p19d+p20+p21d+p22d+p23+p24d+p25+p26d+p27+p28+p29+p30+p31+p32d+p33+p34+p35+p36d;
EST2=p37+p38d+p39+p40+p41d+p42+p43+p44+p45d+p46d+p47+p48d+p49+p50d+p51d+p52d+p55d+p53+p54+p56+p57+p58+p59d+p60+p61+p62d+p63d+p64d+p65+p66+p67d+p68+p69+p70d+p71+p72;
SOC=p1+p2d+p3d+p4d+p5d+p6+p7+p8+p9+p10+p11d+p12+p13+p14d+p15d+p16d+p17+p18d+p19+p20+p21d+p22+p23+p24+p25d+p26d+p27d+p28+p29+p30+p31d+p32+p33d+p34+p35+p36;
SOC2=p37+p38+p39+p40d+p41+p42+p43d+p44+p45d+p46d+p47d+p48+p49+p50+p51d+p52+p53+p54d+p55d+p56d+p57+p58d+p59+p60+p61d+p62d+p63+p64d+p65+p66d+p67+p68+p69d+p70d+p71d+p72;
CAU=p73d+p74d+p75d+p76+p77+p78+p79+p80d+p81+p82+p83+p84d+p85d+p86d+p87+p88d+p89d+p90d+p91+p92d+p93d+p94+p95+p96+p97+p98d+p99+p100+p101+p102d+p103+p104+p105+p106d+p107d+p108d+p109d+p110d+p111+p112d;
CAU2=p113+p114d+p115d+p116d+p117d+p118d+p119d+p120+p121d+p122+p123+p124+p125+p126+p127d+p128+p129+p130+p131+p132d+p133d+p134+p135d+p136d+p137d+p138+p139d+p140d+p141+p142d+p143+p144+p145+p146+p147d+p148+p149d+p150+p151+p152;
ORI=p73+p74d+p75d+p76d+p77d+p78d+p79+p80d+p81+p82+p83d+p84+p85+p86d+p87d+p88d+p89+p90d+p91d+p92d+p93d+p94d+p95d+p96+p97+p98+p99+p100d+p101d+p102d+p103d+p104+p105+p106+p107d+p108+p109+p110+p111+p112d;
ORI2=p113+p114+p115+p116d+p117d+p118d+p119+p120d+p121d+p122d+p123d+p124+p125d+p126d+p127d+p128+p129+p130+p131d+p132+p133+p134+p135d+p136+p137d+p138+p139+p140+p141d+p142d+p143d+p144+p145+p146d+p147+p148+p149+p150+p151+p152d;
COMP=p73+p74+p75d+p76+p77+p78d+p79d+p80d+p81d+p82+p83d+p84d+p85+p86+p87+p88d+p89+p90+p91+p92d+p93+p94d+p95+p96+p97+p98d+p99d+p100d+p101d+p102d+p103+p104d+p105+p106d+p107+p108+p109d+p110+p111+p112;
COMP2=p113d+p114d+p115+p116d+p117d+p118+p119+p120+p121+p122+p123d+p124+p125d+p126+p127d+p128d+p129d+p130+p131d+p132d+p133+p134d+p135d+p136+p137+p138+p139+p140d+p141+p142+p143d+p144+p145+p146d+p147d+p148d+p149d+p150+p151d+p152d;
VIT=p73+p74d+p75+p76+p77+p78d+p79+p80+p81+p82d+p83d+p84d+p85+p86d+p87+p88+p89+p90d+p91+p92+p93d+p94d+p95+p96d+p97d+p98d+p99+p100d+p101d+p102+p103+p104+p105d+p106d+p107d+p108+p109d+p110+p111d+p112;
VIT2=p113+p114d+p115+p116+p117+p118d+p119+p120+p121d+p122+p123d+p124d+p125d+p126+p127+p128+p129+p130d+p131d+p132d+p133+p134+p135+p136d+p137d+p138d+p139+p140d+p141+p142d+p143d+p144d+p145d+p146d+p147d+p148+p149d+p150d+p151+p152d;

ASR=AS+AS2;
RESR=RES+RES2;
ESTR=EST+EST2;
SOCR=SOC+SOC2;
CAUR=CAU+CAU2;
ORIR=ORI+ORI2;
VITR=VIT+VIT2;
COMPR=COMP+COMP2;
AUTOESTIMA=ASR+RESR+ESTR+SOCR;

//se almacenan resultados para usarlos en la siguiente pagina

localStorage.setItem('ASR', ASR);
localStorage.setItem('AS', AS);
localStorage.setItem('AS2', AS2);

localStorage.setItem('RESR', RESR);
localStorage.setItem('RES', RES);
localStorage.setItem('RES2', RES2);

localStorage.setItem('ESTR', ESTR);
localStorage.setItem('EST', EST);
localStorage.setItem('EST2', EST2);

localStorage.setItem('SOCR', SOCR);
localStorage.setItem('SOC', SOC);
localStorage.setItem('SOC2', SOC2);

localStorage.setItem('CAUR', CAUR);
localStorage.setItem('CAU', CAU);
localStorage.setItem('CAU2', CAU2);

localStorage.setItem('ORIR', ORIR);
localStorage.setItem('ORI', ORI);
localStorage.setItem('ORI2', ORI2);

localStorage.setItem('VITR', VITR);
localStorage.setItem('VIT', VIT);
localStorage.setItem('VIT2', VIT2);

localStorage.setItem('COMPR', COMPR);
localStorage.setItem('COMP', COMP);
localStorage.setItem('COMP2', COMP2);

//document.write("<table border='3'>");

//ASCENDENCIA y RESPONSABILIDAD
//document.write("<tr><td>AS : </td><td>" + AS + "</td><td>RES : </td><td>" + RES + "</td></tr>");  
//document.write("<tr><td>     </td><td>" + AS2 + "</td><td> </td><td>" + RES2 + "</td></tr>"); 
//document.write("<tr><td>     </td><td>" + ASR + "</td><td> </td><td>" + RESR + "</td></tr>"); 

//document.write("</table>");


//document.write("<table border='3'>");

//document.write("<tr><td>EST : </td><td>" + EST + "</td><td>SOC : </td><td>" + SOC + "</td></tr>"); 
//document.write("<tr><td>      </td><td>" + EST2 + "</td><td> </td><td>" + SOC2 + "</td></tr>"); 
//document.write("<tr><td>      </td><td>" + ESTR + "</td><td> </td><td>" + SOCR + "</td></tr>"); //

//document.write("</table>");

//document.write("<table border='3'>");

//document.write("<tr><td>CAU : </td><td>" + CAU + "</td><td>ORI : </td><td>" + ORI + "</td></tr>");
//document.write("<tr><td>     </td><td>" + CAU2 + "</td><td> </td><td>" + ORI2 + "</td></tr>");
//document.write("<tr><td>     </td><td>" + CAUR + "</td><td> </td><td>" + ORIR + "</td></tr>");

//document.write("</table>");

//document.write("<table border='3'>");

//document.write("<tr><td>COM :</td><td>" + COMP + "</td><td>VIT : </td><td>" + VIT + "</td></tr>");
//document.write("<tr><td>      </td><td>" + COMP2 + "</td><td> </td><td>" + VIT2 + "</td></tr>");
//document.write("<tr><td>      </td><td>" + COMPR + "</td><td> </td><td>" + VITR + "</td></tr>");

//document.write("</table>");

//document.write("<table border='3'>");

//document.write("<tr><td>AUTOESTIMA :</td><td>" + AUTOESTIMA );

//document.write("</table><br>"); 

//document.write("<table border='3'>");
//document.write("<h3>RESULTADOS DEL TEST PPG - IPG (L.V. Gordon)</h3>")

//document.write("</table>"); 
//if (SEX == 1) {
 //if (ASR <= 14) {
//	document.write("INF<br>"); //INF HOMBRE
//	document.write("Es una persona que prefiere escuchar \n a hablar, tiene poca autoconfianza, deja que\n otros tomen las desiciones y suele depender de los consejos de los demás<br>");
// }else{
//	if (ASR <= 20) {
//		document.write("LINF<br>"); //LINF HOMBRE
//		document.write("Es una persona que prefiere escuchar a hablar, tiene poca autoconfianza, \ndeja que otros tomen las desiciones y suele depender de los consejos de los demás<br>");
//	}else{
//		if (ASR <= 24) {
//			document.write("N<br> ");
//			document.write("");
//		}else{
//			if (ASR <= 29) {
//				document.write("LS<br> ");
//			}else{
//				if (ASR > 29) {
//					document.write("S <br>");
//					document.write("La persona adopta un papel activo en los grupos, es seguro de si mismo, autoafirmativo en las relaciones con los demás,\n y toma decisiones sin dejarse influir por las presiones del grupo<br>");
//				}
//			}
//
//	}
// }
//}
/*if (SEX==1) {
 if (RESR <= 14) {
 	document.write("INF<br>");
 	document.write("No continua en las tareas cuando deja de interesarle\n y tiende a eludir las responsabilidades<br>");
 }else{
 	if (RESR <= 19) {
 		document.write("LINF <br>");
 		document.write("No continua en las tareas cuando deja de interesarle y tiende a eludir las responsabilidades<br>");
 	}else{
 		if (RESR <= 23) {
 			document.write("N<br>");
 			document.write("<br>")
 		}else{
 			if (RESER <= 28) {
 				document.write("LS <br>");
 				document.write("Es una persona constante y perseverante en las tareas propuestas, aunque, no sean de su agrado e interes,\n los demás se sienten seguros de confiar en el<br>");
 			}else{
 				if (RESER > 28) {
 					document.write("S <br>");
 					document.write("Es una persona constante y perseverante en las tareas propuestas,\n aunque, no sean de su agrado e interes, los demás se sienten seguros de confiar en el<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==1) {
 if (ESTR <= 14) {
 	document.write("INF <br>");
 	document.write("Presenta un desajuste\n emocional por debajo de la media<br>");
 }else{
 	if (ESTR <= 20) {
 		document.write("LINF <br>");
 		document.write("Presenta un desajuste emocional por debajo de la media<br>");
 	}else{
 		if (ESTR <= 24) {
 			document.write("N<br>");
 			document.write("<br>")
 		}else{
 			if (ESTR <= 29) {
 				document.write("LS <br>");
 				document.write("Es una persona equilibrada y con buena tolerancia a la frustración,\n presenta ausencia de hipersensibilidad, ansiedad,preocupaciones y tensión nerviosa<br>");
 			}else{
 				if (ESTR > 29) {
 					document.write("S <br>");
 					document.write("Es una persona equilibrada y con buena tolerancia a la frustración, presenta ausencia de hipersensibilidad, \nansiedad,preocupaciones y tensión nerviosa<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==1) {
 if (SOCR <= 15) {
 	document.write("INF<br>");
 	document.write("Presenta un desajuste\n emocional por debajo de la media<br>");
 }else{
 	if (SOCR <= 20) {
 		document.write("LINF <br>");
 		document.write("Presenta un desajuste emocional por debajo de la media<br>");
 	}else{
 		if (SOCR <= 24) {
 			document.write("N<br>");
 			document.write("<br>")
 		}else{
 			if (SOCR <= 28) {
 				document.write("LS <br>");
 				document.write("Es una persona equilibrada y con buena tolerancia a la frustración,\n presenta ausencia de hipersensibilidad, ansiedad,preocupaciones y tensión nerviosa<br>");
 			}else{
 				if (SOCR > 28) {
 					document.write("S <br>");
 					document.write("Es una persona equilibrada y con buena tolerancia a la frustración, presenta ausencia de hipersensibilidad, \nansiedad,preocupaciones y tensión nerviosa<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==1) {
 if (VITR <= 16) {
 	document.write("INF<br>");
 	document.write("Muestra vigor y energía,\n le gusta actuar o trabajar con rapidez<br>");
 }else{
 	if (VITR <= 21) {
 		document.write("LINF <br>");
 		document.write("Muestra vigor y energía, le gusta actuar o trabajar con rapidez<br>");
 	}else{
 		if (VITR <= 25) {
 			document.write("N<br>");
 			document.write("<br>")
 		}else{
 			if (VITR <= 31) {
 				document.write("LS <br>");
 				document.write("Muestra vigor y energía, le gusta actuar o trabajar con rapidez.<br>");
 			}else{
 				if (VITR > 31) {
 					document.write("S <br>");
 					document.write("Muestra vigor y energía, le gusta actuar o trabajar con rapidez.<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==1) {

}
if (SEX==0) {
 if (ASR <= 14) {
 	document.write("INF<br>");
 	document.write("Es una persona que le molesta o le irrita lo que hacen o hablan los demás<br>");
 }else{
 	if (ASR <= 20) {
 		document.write("LINF <br>");
 		document.write("Es una persona que prefiere escuchar a hablar, tiene poca autoconfianza,\n deja que otros tomen las desiciones y suele depender de los consejos de los demás<br>");
 	}else{
 		if (ASR <= 24) {
 			document.write("N<br>");
 			document.write();
 		}else{
 			if (ASR <= 29) {
 				document.write("LS <br>");
 				document.write("La persona adopta un papel activo en los grupos, es seguro de si mismo,\n autoafirmativo en las relaciones con los demás, y toma decisiones sin dejarse influir por las presiones del grupo<br>");
 			}else{
 				if (ASR > 29) {
 					document.write("S<br>" );
 					document.write("Tiene fe y confianza en los demás, es tolerante, paciente y comprensivo<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==0) {
 if (RESR <= 14) {
 	document.write("INF<br>");
 	document.write("No continua en las tareas cuando deja de interesarle y tiende a eludir las responsabilidades<br>");
 }else{
 	if (RESR <= 19) {
 		document.write("LINF <br>");
 		document.write("No continua en las tareas\n cuando deja de interesarle y tiende a eludir las responsabilidades<br>");
 	}else{
 		if (RESR <= 23) {
 			document.write("N<br>");
 			document.write("<br>");
 		}else{
 			if (RESR <= 28) {
 				document.write("LS <br>");
 				document.write("Es una persona constante y perseverante en las tareas propuestas, aunque, no sean de su agrado e interes, \nlos demás se sienten seguros de confiar en el<br>");
 			}else{
 				if (RESR > 28) {
 					document.write("S<br>" );
 					document.write("Es una persona constante y perseverante en las tareas propuestas, aunque no sean de su agrado e interes, los demás se sienten seguros de confiar en el<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==0) {
 if (ESTR <= 12) {
 	document.write("INF<br>");
 	document.write("Presenta un desajuste emocional por debajo de la media<br>");
 }else{
 	if (ESTR <= 19) {
 		document.write("LINF <br>");
 		document.write("Presenta un desajuste emocional por debajo de la media<br>");
 	}else{
 		if (ESTR <= 23) {
 			document.write("N<br>");
 			document.write("<br>");
 		}else{
 			if (ESTR <= 27) {
 				document.write("LS <br>");
 				document.write("Es una persona equilibrada y con buena tolerancia a la frustración, presenta ausencia de hipersensibilidad,\n ansiedad,preocupaciones y tensión nerviosa<br>");
 			}else{
 				if (ESTR > 27) {
 					document.write("S<br>" );
 					document.write("Es una persona equilibrada y con buena tolerancia a la frustración, presenta ausencia de\n hipersensibilidad, ansiedad,preocupaciones y tensión nerviosa<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==0) {
 if (SOCR <= 16) {
 	document.write("INF<br>");
 	document.write("Presenta una restricción general en los contactos sociales, puede existir una evitación real de toda relación social<br>");
 }else{
 	if (SOCR <= 21) {
 		document.write("LINF<br> ");
 		document.write("Presenta una restricción general en los contactos sociales<br>");
 	}else{
 		if (SOCR <= 25) {
 			document.write("N<br>");
 			document.write("<br>");
 		}else{
 			if (SOCR <= 30) {
 				document.write("LS <br>");
 				document.write(" Es una persona que le gusta estar y trabajar con otros<br>");
 			}else{
 				if (SOCR > 30) {
 					document.write("S<br>" );
 					document.write("Es una persona que le gusta estar y trabajar con otros, puede incluso llegar a ser gregario<br>");
 				}
 			}
 		}
 	}
 }
}
if (SEX==0) {
 if (CAUR <= 12) {
 	document.write("INF<br>");
 	document.write("No es preocupada por adquirrir nuevos conocimientos, ni interesado en resolver problemas<br>");
 }else{
 	if (CAUR <= 19) {
 		document.write("LINF<br> ");
 		document.write("No es preocupada por adquirrir nuevos conocimientos, ni interesado en resolver problemas<br>");
 	}else{
 		if (CAUR <= 24) {
 			document.write("N<br>");
 			document.write("<br>");
 		}else{
 			if (CAUR <= 31) {
 				document.write("LS <br>");
 				document.write(" Le gusta trabajar en tareas difíciles, es intelectualmente curioso, le encanta plantear y solucionar cuestiones intrincadas<br>");
 			}else{
 				if (CAU > 31) {
 					document.write("S<br>" );
 					document.write("Le gusta trabajar en tareas difíciles, es intelectualmente curioso, le encanta plantear y solucionar cuestiones intrincadas.<br>");
 				}
 			}
 		}
 	}
 }
}
*/

}

import React, { Component } from 'react';
import logo from './logo.svg';
import TreeView from  './TreeView';
import { Row, Col, Panel } from 'react-bootstrap';
const data = [{"id":1,"text":"variation","is_a":0,"children":[{"id":2,"text":"variation affecting protein","is_a":1,"children":[{"id":3,"text":"variation affecting protein function","is_a":2,"children":[{"id":4,"text":"effect on protein movement","is_a":3},{"id":5,"text":"effect on protein storage","is_a":3},{"id":6,"text":"effect on structural protein","is_a":3},{"id":7,"text":"effect on protein recognition","is_a":3},{"id":8,"text":"effect on catalytic protein function","is_a":3},{"id":9,"text":"effect on transport function of protein","is_a":3},{"id":11,"text":"effect on protein information transfer","is_a":3}]},{"id":12,"text":"protein variation type","is_a":2,"children":[{"id":323,"text":"protein variation origin","is_a":12,"children":[{"id":13,"text":"protein variation of genetic origin","is_a":323},{"id":24,"text":"variation emerging at protein level","is_a":323,"children":[{"id":25,"text":"epigenetic protein variation","is_a":24,"children":[{"id":26,"text":"protein structural inheritance","is_a":25},{"id":27,"text":"proteinaceous infection","is_a":25}]},{"id":28,"text":"post translational modification","is_a":24},{"id":246,"text":"artificial protein variation","is_a":24},{"id":330,"text":"mistranslated protein","is_a":24}]}]},{"id":325,"text":"protein variation classification","is_a":12,"children":[{"id":14,"text":"amino acid deletion","is_a":325,"children":[{"id":15,"text":"protein truncation","is_a":14},{"id":16,"text":"sequence retaining amino acid deletion","is_a":14}]},{"id":18,"text":"amino acid insertion","is_a":325,"children":[{"id":19,"text":"amphigoric amino acid insertion","is_a":18},{"id":20,"text":"sequence retaining amino acid insertion","is_a":18}]},{"id":21,"text":"amino acid substitution","is_a":325},{"id":22,"text":"amino acid indel","is_a":325,"children":[{"id":23,"text":"amphigoric amino acid indel","is_a":22},{"id":29,"text":"sequence retaining amino acid indel","is_a":22}]},{"id":240,"text":"missing protein","is_a":325}]}]},{"id":32,"text":"variation affecting protein property","is_a":2,"children":[{"id":33,"text":"effect on protein subcellular localization","is_a":32},{"id":34,"text":"effect on protein stability","is_a":32},{"id":35,"text":"effect on protein solubility","is_a":32,"children":[{"id":36,"text":"effect on protein inclusion body formation","is_a":35},{"id":38,"text":"effect on protein aggregation","is_a":35}]},{"id":39,"text":"protein function change","is_a":32,"children":[{"id":40,"text":"protein gain of function","is_a":39,"children":[{"id":41,"text":"neomorphic protein variation","is_a":40},{"id":42,"text":"antimorphic protein variation","is_a":40}]},{"id":43,"text":"protein loss of function","is_a":39}]},{"id":44,"text":"effect on protein accessibility","is_a":32,"children":[{"id":45,"text":"variation exposing buried region","is_a":44},{"id":46,"text":"variation burying exposed region","is_a":44}]},{"id":47,"text":"association of protein variation to pathogenicity","is_a":32},{"id":48,"text":"effect on protein charge","is_a":32,"children":[{"id":49,"text":"effect on protein electrostatics","is_a":48},{"id":50,"text":"effect on protein isoelectric point","is_a":48}]},{"id":51,"text":"effect on protein degradation","is_a":32},{"id":52,"text":"effect on protein abundance","is_a":32},{"id":53,"text":"effect on protein activity","is_a":32,"children":[{"id":54,"text":"effect on protein affinity","is_a":53},{"id":55,"text":"effect on protein specificity","is_a":53},{"id":56,"text":"effect on enzyme reaction kinetics","is_a":53}]},{"id":57,"text":"conservation of protein variation site","is_a":32},{"id":58,"text":"effect on protein interaction","is_a":32,"children":[{"id":59,"text":"effect on protein contact energy","is_a":58}]}]},{"id":60,"text":"variation affecting protein structure","is_a":2,"children":[{"id":61,"text":"epigenetic protein modification","is_a":60,"children":[{"id":62,"text":"prion formation","is_a":61},{"id":63,"text":"epigenetic protein complex structure","is_a":61}]},{"id":64,"text":"effect on protein 3D structure","is_a":60,"children":[{"id":65,"text":"effect on protein dynamics","is_a":64,"children":[{"id":66,"text":"effect on structural flexibility","is_a":65},{"id":67,"text":"effect on induced fit","is_a":65},{"id":68,"text":"effect on structural disorder","is_a":65},{"id":69,"text":"effect on allosteric site","is_a":65}]},{"id":70,"text":"effect on protein tertiary structure","is_a":64,"children":[{"id":71,"text":"effect on protein folding rate","is_a":70},{"id":73,"text":"effect to protein fold","is_a":70,"children":[{"id":74,"text":"protein conformational change","is_a":73,"children":[{"id":75,"text":"global protein conformation change","is_a":74},{"id":76,"text":"local protein conformation change","is_a":74}]},{"id":77,"text":"changed domain orientation","is_a":73},{"id":78,"text":"effect on protein disulphide formation","is_a":73}]},{"id":79,"text":"effect on protein secondary structural element","is_a":70,"children":[{"id":80,"text":"effect on protein helix","is_a":79,"children":[{"id":81,"text":"effect on left handed protein helix","is_a":80},{"id":82,"text":"effect on right handed protein helix","is_a":80,"children":[{"id":83,"text":"effect on pi helix","is_a":82},{"id":84,"text":"effect on three ten helix","is_a":82},{"id":85,"text":"effect on alpha helix","is_a":82}]}]},{"id":86,"text":"effect on protein beta strand","is_a":79,"children":[{"id":87,"text":"effect on protein antiparallel beta strand","is_a":86},{"id":88,"text":"effect on protein parallel beta strand","is_a":86}]},{"id":89,"text":"effect on protein turn motif","is_a":79,"children":[{"id":90,"text":"effect on protein alpha beta motif","is_a":89},{"id":91,"text":"effect on protein beta turn","is_a":89},{"id":92,"text":"effect on protein st motif","is_a":89},{"id":93,"text":"effect on protein st staple","is_a":89},{"id":94,"text":"effect on protein gamma turn","is_a":89},{"id":95,"text":"effect on protein st turn","is_a":89},{"id":96,"text":"effect on protein schellman loop","is_a":89},{"id":97,"text":"effect on protein nest motif","is_a":89},{"id":98,"text":"effect on protein niche motif","is_a":89},{"id":99,"text":"effect on protein asx motif","is_a":89},{"id":100,"text":"effect on protein beta bulge","is_a":89},{"id":101,"text":"effect on protein asx turn","is_a":89},{"id":102,"text":"effect on protein beta bulge loop","is_a":89}]},{"id":103,"text":"effect on protein coil","is_a":79}]},{"id":104,"text":"effect on transmembrane polypeptide","is_a":70,"children":[{"id":105,"text":"effect on membrane protein extramembrane region","is_a":104},{"id":106,"text":"effect on membrane protein intramembrane region","is_a":104}]},{"id":107,"text":"effect on protein post translational modification","is_a":70,"children":[{"id":108,"text":"deletion of a post translational modification site","is_a":107},{"id":109,"text":"effect on protein processing","is_a":107,"children":[{"id":110,"text":"effect on protein splicing","is_a":109},{"id":111,"text":"variation generating a novel protein processing site","is_a":109},{"id":112,"text":"variation preventing polypeptide processing","is_a":109}]},{"id":113,"text":"generation of a novel post translational modification site","is_a":107}]},{"id":114,"text":"effect on amino acid size","is_a":70,"children":[{"id":115,"text":"effect on protein packing","is_a":114,"children":[{"id":116,"text":"protein cavity formation","is_a":115},{"id":117,"text":"protein overpacking","is_a":115}]}]},{"id":118,"text":"effect on protein interaction site","is_a":70,"children":[{"id":119,"text":"effect on protein binding site","is_a":118},{"id":120,"text":"effect on protein catalytic site","is_a":118}]},{"id":124,"text":"protein elongation","is_a":70,"children":[{"id":125,"text":"C-terminal protein elongation","is_a":124},{"id":126,"text":"N-terminal protein elongation","is_a":124},{"id":228,"text":"protein fusion","is_a":124}]}]},{"id":121,"text":"effect on protein quaternary structure","is_a":64,"children":[{"id":122,"text":"effect on protein quaternary structure forming interaction","is_a":121}]},{"id":123,"text":"complex 3D structural change","is_a":64}]}]}]},{"id":128,"text":"variation affecting DNA","is_a":1,"children":[{"id":129,"text":"DNA variation type","is_a":128,"children":[{"id":127,"text":"DNA variation origin","is_a":129,"children":[{"id":130,"text":"DNA variation of genetic origin","is_a":127},{"id":146,"text":"DNA variation of non-genetic origin","is_a":127,"children":[{"id":147,"text":"epigenetic DNA variation","is_a":146},{"id":172,"text":"artificial DNA variation","is_a":146},{"id":331,"text":"misreplicated DNA","is_a":146},{"id":337,"text":"modified DNA","is_a":146}]}]},{"id":322,"text":"DNA variation classification","is_a":129,"children":[{"id":131,"text":"genomic variation","is_a":322},{"id":132,"text":"chromosomal variation","is_a":322,"children":[{"id":133,"text":"variation in chromosome number","is_a":132},{"id":134,"text":"variation of chromosome structure","is_a":132}]},{"id":135,"text":"DNA chain variation","is_a":322,"children":[{"id":136,"text":"DNA substitution","is_a":135},{"id":141,"text":"DNA deletion","is_a":135},{"id":142,"text":"DNA insertion","is_a":135},{"id":143,"text":"DNA indel","is_a":135},{"id":144,"text":"DNA translocation","is_a":135,"children":[{"id":145,"text":"DNA inversion","is_a":144}]}]}]}]},{"id":148,"text":"variation affecting DNA function","is_a":128,"children":[{"id":149,"text":"effect on transcription","is_a":148},{"id":150,"text":"effect on DNA information transfer","is_a":148},{"id":151,"text":"defect in DNA repair","is_a":148},{"id":152,"text":"effect on regulatory function of DNA","is_a":148,"children":[{"id":153,"text":"effect on promoter activity","is_a":152}]},{"id":154,"text":"defective DNA replication","is_a":148}]},{"id":155,"text":"variation affecting DNA structure","is_a":128,"children":[{"id":156,"text":"epigenetic DNA modification","is_a":155,"children":[{"id":157,"text":"epigenetic DNA methylation","is_a":156},{"id":158,"text":"chromatin remodeling","is_a":156}]},{"id":159,"text":"affected DNA level","is_a":155,"children":[{"id":72,"text":"extrachromosomal DNA affected","is_a":159},{"id":160,"text":"DNA chain affected","is_a":159,"children":[{"id":161,"text":"variation in intron","is_a":160},{"id":162,"text":"variation in exon","is_a":160},{"id":163,"text":"variation at intergenic DNA","is_a":160}]},{"id":164,"text":"chromosome affected","is_a":159},{"id":165,"text":"genome affected","is_a":159}]},{"id":166,"text":"gene structure variation","is_a":155,"children":[{"id":167,"text":"gene fusion","is_a":166},{"id":168,"text":"gene deletion","is_a":166,"children":[{"id":169,"text":"complete gene deletion","is_a":168},{"id":170,"text":"partial gene deletion","is_a":168}]}]},{"id":171,"text":"effect on DNA secondary structure","is_a":155,"children":[{"id":137,"text":"effect on DNA stem","is_a":171},{"id":173,"text":"effect on DNA G-quadruplex","is_a":171},{"id":174,"text":"effect on i motif","is_a":171},{"id":175,"text":"effect on triple-stranded DNA","is_a":171}]},{"id":176,"text":"chromosome variation","is_a":155,"children":[{"id":180,"text":"chromosome structure variation","is_a":176,"children":[{"id":177,"text":"telomere length change","is_a":180,"children":[{"id":178,"text":"telomere shortening","is_a":177},{"id":179,"text":"telomere extension","is_a":177}]},{"id":181,"text":"isochromosome","is_a":180},{"id":182,"text":"ring chromosome","is_a":180},{"id":183,"text":"chromosomal amplification","is_a":180,"children":[{"id":184,"text":"interspersed repeat","is_a":183},{"id":185,"text":"tandem repeat","is_a":183,"children":[{"id":186,"text":"minisatellite","is_a":185},{"id":188,"text":"microsatellite","is_a":185,"children":[{"id":189,"text":"trinucleotide expansion","is_a":188},{"id":190,"text":"mononucleotide expansion","is_a":188},{"id":191,"text":"tetranucleotide expansion","is_a":188}]}]},{"id":192,"text":"mobile genetic element insertion","is_a":183}]},{"id":187,"text":"copy number variation","is_a":180},{"id":193,"text":"chromosomal deletion","is_a":180,"children":[{"id":194,"text":"interstitial deletion","is_a":193},{"id":195,"text":"terminal deletion","is_a":193}]},{"id":196,"text":"complex chromosomal variation","is_a":180},{"id":197,"text":"chromosomal translocation","is_a":180,"children":[{"id":198,"text":"intrachromosomal translocation","is_a":197,"children":[{"id":199,"text":"chromosomal inversion","is_a":198,"children":[{"id":200,"text":"paracentric inversion","is_a":199},{"id":201,"text":"pericentric inversion","is_a":199}]}]},{"id":202,"text":"interchromosomal translocation","is_a":197,"children":[{"id":203,"text":"reciprocal chromosomal translocation","is_a":202},{"id":204,"text":"Robertsonian translocation","is_a":202}]}]}]},{"id":205,"text":"uncharacterized chromosomal variation","is_a":176},{"id":206,"text":"chromosome number variation","is_a":176,"children":[{"id":207,"text":"trisomy","is_a":206},{"id":208,"text":"disomy","is_a":206,"children":[{"id":209,"text":"uniparental disomy","is_a":208,"children":[{"id":210,"text":"isodisomy","is_a":209},{"id":211,"text":"heterodisomy","is_a":209}]}]},{"id":212,"text":"nullisomy","is_a":206},{"id":213,"text":"tetrasomy","is_a":206},{"id":214,"text":"monosomy","is_a":206},{"id":303,"text":"polysomy","is_a":206}]}]},{"id":215,"text":"chromosome set number variation","is_a":155,"children":[{"id":216,"text":"diploidy","is_a":215},{"id":217,"text":"tetraploidy","is_a":215},{"id":218,"text":"polyploidy","is_a":215,"children":[{"id":219,"text":"autopolyploidy","is_a":218},{"id":220,"text":"allopolyploidy","is_a":218}]},{"id":221,"text":"nulliploidy","is_a":215},{"id":222,"text":"triploidy","is_a":215},{"id":223,"text":"pentaploidy","is_a":215},{"id":224,"text":"hexaploidy","is_a":215},{"id":225,"text":"monoploidy","is_a":215}]},{"id":226,"text":"chromatin structure variation","is_a":155}]},{"id":227,"text":"variation affecting DNA property","is_a":128,"children":[{"id":229,"text":"association of DNA variation to pathogenicity","is_a":227},{"id":230,"text":"effect on DNA interaction","is_a":227},{"id":231,"text":"conservation of DNA variation site","is_a":227}]}]},{"id":232,"text":"variation attribute","is_a":1,"children":[{"id":17,"text":"nonsynonymous variation","is_a":232},{"id":138,"text":"variant","is_a":232},{"id":139,"text":"mutation","is_a":232},{"id":233,"text":"conservation","is_a":232,"children":[{"id":37,"text":"covariant position","is_a":233},{"id":234,"text":"conserved region","is_a":233},{"id":235,"text":"invariant region","is_a":233}]},{"id":236,"text":"interaction","is_a":232,"children":[{"id":237,"text":"genetic interaction","is_a":236,"children":[{"id":238,"text":"genetic interaction defined by inequality","is_a":237,"children":[{"id":239,"text":"single nonmonotonic genetic interaction defined by inequality","is_a":238},{"id":242,"text":"conditional genetic interaction defined by inequality","is_a":238},{"id":243,"text":"additive genetic interaction defined by inequality","is_a":238}]},{"id":248,"text":"positive genetic interaction","is_a":237,"children":[{"id":249,"text":"double nonmonotonic genetic interaction defined by inequality","is_a":248},{"id":250,"text":"epistatic genetic interaction","is_a":248,"children":[{"id":251,"text":"epistatic genetic interaction defined by inequality","is_a":250},{"id":252,"text":"asynthetic genetic interaction defined by inequality","is_a":250},{"id":253,"text":"suppressive genetic interaction defined by inequality","is_a":250}]}]},{"id":254,"text":"neutral genetic interaction","is_a":237,"children":[{"id":255,"text":"noninteractive genetic interaction defined by inequality","is_a":254}]},{"id":256,"text":"negative genetic interaction","is_a":237,"children":[{"id":257,"text":"synthetic genetic interaction defined by inequality","is_a":256}]}]},{"id":258,"text":"structural level of interaction","is_a":236,"children":[{"id":259,"text":"intermolecular interaction","is_a":258},{"id":260,"text":"intramolecular interaction","is_a":258}]},{"id":261,"text":"colocalization","is_a":236},{"id":262,"text":"interactor","is_a":236,"children":[{"id":263,"text":"small molecule","is_a":262,"children":[{"id":264,"text":"metal","is_a":263},{"id":265,"text":"solvent","is_a":263,"children":[{"id":266,"text":"water","is_a":265}]}]},{"id":267,"text":"complex","is_a":262,"children":[{"id":268,"text":"ribonucleoprotein complex","is_a":267},{"id":269,"text":"protein complex","is_a":267},{"id":270,"text":"protein dna complex","is_a":267}]},{"id":271,"text":"unknown participant","is_a":262},{"id":272,"text":"gene","is_a":262},{"id":273,"text":"biopolymer","is_a":262,"children":[{"id":274,"text":"nucleic acid","is_a":273},{"id":275,"text":"peptide","is_a":273},{"id":276,"text":"polysaccharide","is_a":273},{"id":277,"text":"protein","is_a":273}]}]},{"id":278,"text":"association","is_a":236},{"id":279,"text":"interaction physical force","is_a":236,"children":[{"id":280,"text":"covalent bond","is_a":279,"children":[{"id":281,"text":"disulphide bridge","is_a":280}]},{"id":282,"text":"non covalent bond","is_a":279,"children":[{"id":283,"text":"hydrogen bond","is_a":282,"children":[{"id":284,"text":"hydrogen bond network","is_a":283}]},{"id":285,"text":"hydrophobic interaction","is_a":282},{"id":286,"text":"salt bridge","is_a":282},{"id":287,"text":"van der Waals interaction","is_a":282},{"id":288,"text":"electrostatic interaction","is_a":282}]}]}]},{"id":289,"text":"quantity change","is_a":232,"children":[{"id":140,"text":"not changed","is_a":289},{"id":290,"text":"decreased","is_a":289},{"id":291,"text":"increased","is_a":289},{"id":292,"text":"missing","is_a":289}]},{"id":293,"text":"pathogenicity association","is_a":232,"children":[{"id":294,"text":"disease causing","is_a":293},{"id":295,"text":"not related to clinical phenotype","is_a":293},{"id":296,"text":"disease associated","is_a":293}]},{"id":343,"text":"synonymous variation","is_a":232}]},{"id":297,"text":"variation affecting RNA","is_a":1,"children":[{"id":298,"text":"variation affecting RNA property","is_a":297,"children":[{"id":10,"text":"effect on RNA abundance","is_a":298},{"id":299,"text":"effect on RNA degradation","is_a":298,"children":[{"id":344,"text":"RNA degradation by decay","is_a":299,"children":[{"id":345,"text":"RNA degradation by nonstop-mediated decay","is_a":344},{"id":346,"text":"RNA degradation by no-go mediated decay","is_a":344},{"id":347,"text":"RNA degradation by nonsense-mediated decay","is_a":344}]}]},{"id":300,"text":"effect on RNA folding","is_a":298},{"id":301,"text":"effect on RNA stability","is_a":298},{"id":302,"text":"conservation of RNA variation site","is_a":298},{"id":304,"text":"association of RNA variation to pathogenicity","is_a":298},{"id":305,"text":"effect on RNA interaction","is_a":298}]},{"id":306,"text":"RNA variation type","is_a":297,"children":[{"id":324,"text":"RNA variation origin","is_a":306,"children":[{"id":307,"text":"RNA variation of genetic origin","is_a":324},{"id":333,"text":"variation emerging at RNA level","is_a":324,"children":[{"id":247,"text":"artificial RNA variation","is_a":333},{"id":329,"text":"mistranscribed RNA","is_a":333},{"id":334,"text":"edited RNA","is_a":333},{"id":335,"text":"decayed RNA","is_a":333},{"id":336,"text":"modified RNA","is_a":333}]}]},{"id":328,"text":"RNA variation classification","is_a":306,"children":[{"id":241,"text":"RNA translocation","is_a":328,"children":[{"id":244,"text":"RNA inversion","is_a":241}]},{"id":245,"text":"missing RNA","is_a":328},{"id":309,"text":"termination codon change","is_a":328},{"id":311,"text":"RNA indel","is_a":328,"children":[{"id":30,"text":"in-frame indel","is_a":311},{"id":31,"text":"out-of-frame indel","is_a":311}]},{"id":312,"text":"RNA substitution","is_a":328,"children":[{"id":308,"text":"missense variation","is_a":312},{"id":310,"text":"nonsense variation","is_a":312},{"id":318,"text":"silent variation","is_a":312}]},{"id":317,"text":"initiation codon change","is_a":328},{"id":319,"text":"RNA deletion","is_a":328,"children":[{"id":320,"text":"in-frame deletion","is_a":319},{"id":321,"text":"out-of-frame deletion","is_a":319}]},{"id":326,"text":"RNA insertion","is_a":328,"children":[{"id":327,"text":"out-of-frame insertion","is_a":326},{"id":332,"text":"in-frame insertion","is_a":326}]}]}]},{"id":338,"text":"variation affecting RNA structure","is_a":297,"children":[{"id":339,"text":"effect on RNA editing","is_a":338,"children":[{"id":340,"text":"effect on RNA substitution editing","is_a":339},{"id":341,"text":"effect on RNA insertion editing","is_a":339},{"id":342,"text":"effect on RNA deletion editing","is_a":339}]},{"id":348,"text":"RNA modification by nonsense-associated altered splicing","is_a":338},{"id":349,"text":"affected RNA level","is_a":338,"children":[{"id":350,"text":"non-protein coding RNA sequence","is_a":349},{"id":351,"text":"protein coding RNA sequence","is_a":349,"children":[{"id":352,"text":"coding RNA sequence","is_a":351},{"id":353,"text":"non-coding region of protein coding RNA sequence","is_a":351}]}]},{"id":354,"text":"effect on RNA maturation","is_a":338,"children":[{"id":355,"text":"effect on RNA polyadenylation","is_a":354,"children":[{"id":356,"text":"effect on alternative polyadenylation","is_a":355}]},{"id":357,"text":"effect on RNA five prime capping","is_a":354},{"id":358,"text":"effect on RNA three prime end processing","is_a":354},{"id":359,"text":"effect on RNA modification","is_a":354,"children":[{"id":360,"text":"effect on RNA base modification","is_a":359},{"id":361,"text":"effect on RNA nucleoside sugar modification","is_a":359}]},{"id":362,"text":"effect on RNA splicing","is_a":354,"children":[{"id":364,"text":"intron gain","is_a":362},{"id":365,"text":"variation affecting cis splicing","is_a":362,"children":[{"id":366,"text":"variation at recursive splice site","is_a":365},{"id":367,"text":"variation at five prime cis splice site","is_a":365,"children":[{"id":368,"text":"variation at canonical five prime splice site","is_a":367},{"id":369,"text":"variation at non canonical five prime splice site","is_a":367}]},{"id":370,"text":"variation at three prime cis splice site","is_a":365,"children":[{"id":371,"text":"variation at non canonical three prime splice site","is_a":370},{"id":372,"text":"variation at canonical three prime splice site","is_a":370}]}]},{"id":373,"text":"cryptic splice site activation","is_a":362,"children":[{"id":374,"text":"cryptic splice donor activation","is_a":373},{"id":375,"text":"cryptic splice acceptor activation","is_a":373}]},{"id":376,"text":"variation affecting trans splicing","is_a":362},{"id":381,"text":"exon loss","is_a":362}]}]},{"id":382,"text":"variation to RNA secondary structure","is_a":338,"children":[{"id":363,"text":"effect on RNA G-quadruplex","is_a":382},{"id":383,"text":"effect on RNA multiloop","is_a":382},{"id":384,"text":"effect on RNA bulge","is_a":382},{"id":385,"text":"effect on RNA interior loop","is_a":382},{"id":386,"text":"effect on RNA stem","is_a":382},{"id":387,"text":"effect on RNA hairpin loop","is_a":382}]}]},{"id":396,"text":"variation affecting RNA function","is_a":297,"children":[{"id":397,"text":"effect on RNA splicing function","is_a":396},{"id":398,"text":"effect on catalytic RNA activity","is_a":396},{"id":399,"text":"effect on translation","is_a":396},{"id":400,"text":"effect on regulatory function of RNA","is_a":396},{"id":401,"text":"effect on amino acid transfer of RNA","is_a":396},{"id":402,"text":"effect on RNA information transfer","is_a":396}]}]}]}];

class App extends Component {
  onExpand({event, node}) {
      console.log([event, node]);
  }
  onDragStart(e , node) {
    console.log(node);
  }
  onSelect(node) {
      console.log(['select', arguments]);
  }
  onDrag() {
      console.log('on drag');
  }
  onDragEnd() {
      console.log('on drag end');
  }
  onCheck() {
      console.log('on check');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TreeView</h2>
        </div>
          <Row>
            <Col sm={8} smOffset={2}>
                <Panel bsStyle="primary">
                    <TreeView
                        onSelect={this.onSelect.bind(this)}
                        onDrag={this.onDrag.bind(this)}
                        onDragStart={this.onDragStart.bind(this)}
                        onDragEnd={this.onDragEnd.bind(this)}
                        onExpand={this.onExpand.bind(this)}
                        onCheck={this.onCheck.bind(this)}
                        data={data}
                        checkable
                        collapsedIcon="pencil"
                        draggable
                        selectable
                    />
                </Panel>
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;

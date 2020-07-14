function makeTablesTablePdf()
{
    let doc = new jsPDF();

    const fontSize = 12;
    doc.setFontSize(fontSize);
    
    const charWidth = fontSize/6;
    const skip = charWidth*5;

    const topMargin = 20;
    const leftMargin = 20;

    for(let i=1;i<=10;++i) {
        doc.text(i.toString(),leftMargin+skip*(1.5+i),topMargin+skip*1,{align:"right"});
    }

    for(let j=1;j<=10;++j) {
        const baseline = topMargin+skip*(1.5+j);
        doc.text(j.toString(),leftMargin+skip*1,baseline,{align:"right"});
   
        for(let i=1;i<=10;++i) {
            doc.text((j*i).toString(),leftMargin+skip*(1.5+i),baseline,{align:"right"});
        }
    }
  
    doc.line(leftMargin,topMargin+skip*1.5,leftMargin+skip*12,topMargin+skip*1.5);
    doc.line(leftMargin+skip*1.5,topMargin,leftMargin+skip*1.5,topMargin+skip*12);

    doc.save("tables_table.pdf");
}

import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const PDFViewer = () => {
    const pdfURL = '/MichaelBaxterResume.pdf';
return (
 <div>
 <Document file={pdfURL}>
 <Page   renderTextLayer={false}
         renderAnnotationLayer={false}
         customTextRenderer={false}
         pageNumber={1} />
 </Document>
 </div>
 );
};
export default PDFViewer;


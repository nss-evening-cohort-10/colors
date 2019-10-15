import $ from 'jquery';

const printToDom = (divId, textToPrint) => {
  // const selectedDiv = document.getElementById(divId);
  // selectedDiv.innerHTML = textToPrint;
  $(`#${divId}`).html(textToPrint);
};

export default { printToDom };

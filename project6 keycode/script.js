const insert = document.getElementById('insert');

window.addEventListener('keypress', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th style="padding:6px">Key</th>
      <th style="padding:6px">ASCIIcode</th> 
      <th style="padding:6px">Code</th>
    </tr>
    <tr>
      <td style="padding:6px">${e.key === ' ' ? 'Space' : e.key}</td>
      <td style="padding:6px">${e.keyCode}</td> 
      <td style="padding:6px">${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


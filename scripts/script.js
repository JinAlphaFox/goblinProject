const tableau = document.querySelector(".tableau");
const ligneTableau = 
`<tr>
    <th>Balise</th>
    <th>Arguments</th>
    <th>Description</th>
    <th>Source</th>
</tr>
<tr>
    <td>&lt!DOCTYPE&gt</td>
    <td>html</td>
    <td>1ère balise html</td>
    <td><a href="#" title="AlphaFox">Openclassrooms</a></td>
</tr>
`;

tableau.innerHTML = ligneTableau;
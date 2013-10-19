<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Artistas.aspx.cs" MasterPageFile="~/Site.master" Inherits="Artistas" %>

<asp:Content ContentPlaceHolderID="HeadContent" runat="server">
 <link href="Styles/Artistas.css" rel="stylesheet" type="text/css" />
</asp:Content>

<asp:Content  ContentPlaceHolderID="MainContent" runat="server">
    <div id="Submenu">
        <p>Submenu</p>
    </div>
    <div id="Artistas">
        <table id="tablaArtistas" cellpadding="3px">
            <tr class="tr">
                <td><img src="Recursos/davidGueta.jpg" width="290px" height="290px" alt="Guetta" /></td>
                <td><img src="Recursos/paulKalkenberg.jpg" width="290px" height="290px" alt="Paul" /></td>
                <td><img src="Recursos/carlCox.jpg" width="290px" height="290px" alt="CarlCox" /></td>
            </tr>
        </table>
    </div>
    
</asp:Content>

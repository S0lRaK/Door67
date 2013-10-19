<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Home.aspx.cs" MasterPageFile="~/Site.master" Inherits="Home" %>

<asp:Content ContentPlaceHolderID="HeadContent" runat="server">
<link href="Styles/Home.css" rel="stylesheet" type="text/css" />
</asp:Content>

<asp:Content  ContentPlaceHolderID="MainContent" runat="server">
    <div id="Lema">
        <p> Lema </p>
    </div>
    <div id="Video">
        <p> Video </p>
    </div>
    <div id="LastReleases">
        <p> Last Releases </p>
    </div>
    <div id="NextEvent">
        <p> Next Event </p>
    </div>
    <div id="LastPodcast">
        <p> Last Podcast </p>
    </div>
    <div id="LastShares">
         <p> Last shares </p>
    </div>
</asp:Content>

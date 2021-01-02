
<template>
    <b-navbar fixed-top type="is-white" shadow spaced>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="/src/assets/images/cogov__logo--blue.png"
                    alt="Modeling Scalable Social Coordination Systems Infused with Loving Kindness"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Protocol.Love" hoverable arrowless>
                <b-navbar-item href="/protocol.love">
                    Overview
                </b-navbar-item>
                <b-navbar-item href="/specs">
                    Developers
                </b-navbar-item>
                <b-navbar-item href="/holochain">
                    Holochain
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="Current-See" hoverable arrowless>
                <b-navbar-item href="/ecosystem">
                    Ecosystem
                </b-navbar-item>
                <b-navbar-item href="/whitepaper">
                    Whitepaper
                </b-navbar-item>
                <b-navbar-item href="/declaration">
                    Declaration
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-dropdown label="About" hoverable arrowless>
                <b-navbar-item href="/about">
                    About
                </b-navbar-item>
                <b-navbar-item href="/vision">
                    Vision
                </b-navbar-item>
                <b-navbar-item href="/services">
                    Services
                </b-navbar-item>
                <b-navbar-item href="/connect">
                    Connect
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-info" href="/connect">
                        <strong>Connect</strong>
                    </a>
                    <a class="button is-light" href="/whitepaper">
                        Whitepaper
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

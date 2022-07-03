'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' : 'data-target="#xs-components-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' :
                                            'id="xs-components-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCrudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCrudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductRead2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductRead2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductReadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductReadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductUpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' : 'data-target="#xs-directives-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' :
                                        'id="xs-directives-links-module-AppModule-977adaede35ca9af8fc65d6e6cf916ca776ba3a4e6450f351ec2097e8c37b0d10842985b84223157a896ba8c873e67a5a99ae8c8e8907f87c12aa259ad1b4de2"' }>
                                        <li class="link">
                                            <a href="directives/ForDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RedDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ProductRead2DataSource.html" data-type="entity-link" >ProductRead2DataSource</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HeaderService.html" data-type="entity-link" >HeaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/HearderData.html" data-type="entity-link" >HearderData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductRead2Item.html" data-type="entity-link" >ProductRead2Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
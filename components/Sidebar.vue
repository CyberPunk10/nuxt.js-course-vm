<template>
  <div class="sidebar-wrapper" @click="handleClickSidebar">
    <div class="sidebar layout-scrollbar layout-cell">

      <div class="sidenav-header d-flex align-items-center">
        <a href="#" class="navbar-brand">
          <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 163 28" class="h-6 lg:h-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"><g fill="none" fill-rule="evenodd">
            <path fill="#00C58E" d="M133.579444 26.5222222c-.88549-.5014932-1.622185-1.2287956-2.135-2.1077778-.152035-.2173666-.238424-.4738349-.248888-.7388888-.000193-.3430171.150578-.6687379.412222-.8905556.222676-.2329753.525939-.3720868.847778-.3888889.48858.0456475.935693.2938871 1.232777.6844445.607819 1.0001935 1.699729 1.6038507 2.87 1.5866666.949877.0221498 1.867941-.3428297 2.543334-1.0111111.68192-.6461735 1.060237-1.5496176 1.042222-2.4888889V9.17777778c-.004199-.35418453.144633-.69295609.408333-.92944445.254951-.25098396.598911-.39080498.956667-.38888889.361385-.01763672.713749.11626146.972222.36944445.247128.24968064.380721.5899909.369445.94111111v12.0166667c.010226 1.0770922-.27347 2.1365818-.820556 3.0644444-.542163.924686-1.320659 1.6884177-2.255556 2.2127778-.980032.5549692-2.089955.8394961-3.216111.8244444-1.043058.0110499-2.07058-.2532084-2.978889-.7661111zM152.386111 26.7244444c-1.083808-.4114434-2.078081-1.0280772-2.928333-1.8161111-.350592-.269001-.560727-.6821233-.571667-1.1238889.004184-.336029.144515-.655984.388889-.8866666.232746-.2506324.560201-.3917768.902222-.3888889.288127-.0039551.566692.1032927.777778.2994444.656906.6271532 1.420815 1.131597 2.255556 1.4894445.839615.3338482 1.737135.4977548 2.640555.4822222 1.028927.0325665 2.043848-.2452155 2.912778-.7972222.723023-.4062612 1.176065-1.1657737 1.19-1.995.013567-.8908368-.437196-1.7246021-1.19-2.2011111-1.092306-.6414419-2.290981-1.0813952-3.538889-1.2988889-1.882222-.3888889-3.325-1.015-4.34-1.89-1.015-.875-1.516667-2.0883334-1.516667-3.6361111-.021436-1.0164805.27792-2.0138785.855556-2.8505556.587391-.83052839 1.395716-1.47988214 2.333333-1.87444443 1.072402-.45239591 2.227347-.67623265 3.391111-.65722223 1.090803-.00693167 2.17427.17869268 3.200556.54833334.905215.30530096 1.735082.79977447 2.434444 1.45055555.373522.27543843.604551.70326957.63 1.16666667-.000023.3295714-.133263.6451397-.369444.875-.22617.252974-.551274.394941-.890556.3888889-.229358.0088112-.453389-.0705043-.626111-.2216667-.567368-.5321772-1.238641-.9412966-1.971666-1.2016666-.759251-.3060841-1.569185-.4670156-2.387778-.4744445-1.025275-.0527238-2.042016.2106243-2.912778.7544445-.676188.4480604-1.082775 1.2052239-1.082775 2.0163888 0 .811165.406587 1.5683285 1.082775 2.0163889.996126.5808801 2.083599.9885181 3.216111 1.2055556 1.202731.2367017 2.376254.6031018 3.5 1.0927778.848078.3750097 1.57323.9815497 2.092222 1.75.525801.8833524.781322 1.9013804.735 2.9283333.015198 1.0094901-.295766 1.996936-.886666 2.8155556-.621706.8441439-1.458334 1.5061946-2.422778 1.9172222-1.060141.4638984-2.206765.6972-3.363889.6844444-1.203988.0224112-2.40234-.1698519-3.538889-.5677778z" class="fill-nuxt-lightgreen"></path></g></svg>
        </a>
        <div class="ml-auto">
          <div class="sidenav-toggler d-none d-xl-block active">
            <div class="sidenav-toggler-inner"><i class="sidenav-toggler-line"></i> <i class="sidenav-toggler-line"></i> <i class="sidenav-toggler-line"></i></div>
          </div>
        </div>
      </div>

      <div class="sidebar-settings">
        <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-1" title="Sidebar not static and top" />
        <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-2" isChecked title="Main-container not static and static Sidebar" />
        <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-3" title="Main-container not static"/>
      </div>

      <div class="navbar-inner">
        <ul class="navbar-nav">
          <li to="/" tag="li" class="nav-item active">
            <a data-toggle="collapse" class="sidebar-menu-item nav-link active" aria-expanded="true"><i class="ni ni-shop text-primary"></i> <span class="nav-link-text">Dashboards <b class="caret"></b></span></a>
            <div class="collapse show" style="animation-fill-mode: both; animation-timing-function: ease-out;" data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div>
                  <a href="/dashboard" class="nav-link">
                    <span class="nav-link-text">Dashboard</span>
                  </a>
                </li>
                <li class="nav-item active nuxt-link-active">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div>
                  <a href="/alternative" class="nav-link active nuxt-link-active">
                    <span class="nav-link-text">Alternative</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li to="/" tag="li" class="nav-item"><a data-toggle="collapse" class="sidebar-menu-item nav-link"><i class="ni ni-ungroup text-orange"></i> <span class="nav-link-text">Examples <b class="caret"></b></span></a>
            <div class="collapse show" style="display:none">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/pricing" class="nav-link"><span class="nav-link-text">Pricing</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/login" class="nav-link"><span class="nav-link-text">Login</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/register" class="nav-link"><span class="nav-link-text">Register</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/lock" class="nav-link"><span class="nav-link-text">Lock</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/pages/timeline" class="nav-link"><span class="nav-link-text">Timeline</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/pages/user" class="nav-link"><span class="nav-link-text">Profile</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li to="/" tag="li" class="nav-item"><a data-toggle="collapse" class="sidebar-menu-item nav-link" aria-expanded="true"><i class="ni ni-ui-04 text-info"></i> <span class="nav-link-text">Components <b class="caret"></b></span></a>
            <div class="collapse show" style="animation-fill-mode: both; animation-timing-function: ease-out;" data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/components/buttons" class="nav-link"><span class="nav-link-text">Buttons</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/components/cards" class="nav-link"><span class="nav-link-text">Cards</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/components/grid-system" class="nav-link"><span class="nav-link-text">Grid</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/components/notifications" class="nav-link"><span class="nav-link-text">Notifications</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/components/icons" class="nav-link"><span class="nav-link-text">Icons</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/components/typography" class="nav-link"><span class="nav-link-text">Typography</span></a>
                </li>
                <li to="/" tag="li" class="nav-item"><a data-toggle="collapse" class="sidebar-menu-item nav-link"><span class="nav-link-text">
                      Multi Level <b class="caret"></b></span></a>
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <div class="collapse show" style="display:none">
                          <ul class="nav nav-sm flex-column"></ul>
                        </div> <a href="#" class="nav-link"><span class="nav-link-text">Third level menu</span></a>
                      </li>
                      <li class="nav-item">
                        <div class="collapse show" style="display:none">
                          <ul class="nav nav-sm flex-column"></ul>
                        </div> <a href="#" class="nav-link"><span class="nav-link-text">Just another link</span></a>
                      </li>
                      <li class="nav-item">
                        <div class="collapse show" style="display:none">
                          <ul class="nav nav-sm flex-column"></ul>
                        </div> <a href="#" class="nav-link"><span class="nav-link-text">One last link</span></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li to="/" tag="li" class="nav-item"><a data-toggle="collapse" class="sidebar-menu-item nav-link"><i class="ni ni-single-copy-04 text-pink"></i> <span class="nav-link-text">Forms <b class="caret"></b></span></a>
            <div class="collapse show" style="display:none">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/forms/elements" class="nav-link"><span class="nav-link-text">Elements</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/forms/components" class="nav-link"><span class="nav-link-text">Components</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/forms/validation" class="nav-link"><span class="nav-link-text">Validation</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li to="/" tag="li" class="nav-item"><a data-toggle="collapse" class="sidebar-menu-item nav-link"><i class="ni ni-align-left-2 text-default"></i> <span class="nav-link-text">Tables <b class="caret"></b></span></a>
            <div class="collapse show" style="display:none">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/tables/regular" class="nav-link"><span class="nav-link-text">Tables</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/tables/sortable" class="nav-link"><span class="nav-link-text">Sortable</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/tables/paginated" class="nav-link"><span class="nav-link-text">Paginated Tables</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li to="/" tag="li" class="nav-item"><a data-toggle="collapse" class="sidebar-menu-item nav-link"><i class="ni ni-map-big text-primary"></i> <span class="nav-link-text">Maps <b class="caret"></b></span></a>
            <div class="collapse show" style="display:none">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/maps/google" class="nav-link"><span class="nav-link-text">Google</span></a>
                </li>
                <li class="nav-item">
                  <div class="collapse show" style="display:none">
                    <ul class="nav nav-sm flex-column"></ul>
                  </div> <a href="/maps/vector" class="nav-link"><span class="nav-link-text">Vector</span></a>
                </li>
              </ul>
            </div>

          </li>
          <li class="nav-item">
            <div class="collapse show" style="display:none">
              <ul class="nav nav-sm flex-column"></ul>
            </div> <a href="/widgets" class="nav-link"><i class="ni ni-archive-2 text-green"></i> <span class="nav-link-text">Widgets</span></a>
          </li>
          <li class="nav-item">
            <div class="collapse show" style="display:none">
              <ul class="nav nav-sm flex-column"></ul>
            </div> <a href="/charts" class="nav-link"><i class="ni ni-chart-pie-35 text-info"></i> <span class="nav-link-text">Charts</span></a>
          </li>
          <li class="nav-item">
          <div class="collapse show" style="display:none">
            <ul class="nav nav-sm flex-column"></ul>
          </div> <a href="/calendar" class="nav-link"><i class="ni ni-calendar-grid-58 text-red"></i> <span class="nav-link-text">Calendar</span></a>
          </li>
        </ul>
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item"><a href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation" target="_blank" rel="noopener" class="nav-link"><i class="ni ni-spaceship"></i> <span class="nav-link-text">Getting started</span></a></li>
          <li class="nav-item"><a href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/foundation/colors.html" target="_blank" rel="noopener" class="nav-link"><i class="ni ni-palette"></i> <span class="nav-link-text">Foundation</span></a></li>
          <li class="nav-item"><a href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/components/avatars.html" target="_blank" rel="noopener" class="nav-link"><i class="ni ni-ui-04"></i> <span class="nav-link-text">Components</span></a></li>
          <li class="nav-item"><a href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/components/plugin_datepicker.html" target="_blank" rel="noopener" class="nav-link"><i class="ni ni-chart-pie-35"></i> <span class="nav-link-text">Plugins</span></a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickSidebar: function(event) {
      console.log('click on Sidebar', event.target)
      const sideBar = document.querySelector('.sidebar-wrapper')
      if (event.target.className === 'radio-btn__input') {
        console.log(event.target.id)
        const id = event.target.id
        const layoutWrapper = document.querySelector('.layout-wrapper')
        if (id === 'mode-view-sidebar-1') {
          sideBar.classList.add('transform-x')
          layoutWrapper.classList.remove('main-container_transform-x')
        }
        if (id === 'mode-view-sidebar-2') {
          layoutWrapper.classList.add('main-container_transform-x')
          sideBar.classList.remove('transform-x')
        }
        if (id === 'mode-view-sidebar-3') {
          layoutWrapper.classList.add('main-container_transform-x')
          sideBar.classList.add('transform-x')
        }
      }
    }
  }
}
</script>

<style lang="sass">
.sidebar-wrapper
  z-index: 999
  position: fixed
  .sidebar
    position: fixed
    top: 0
    bottom: 0
    height: 100%
    transition: $transitionSidebar
    left: 0
    width: $sidebarWidth
    background-color: #fff
    color: #242424

// если sidebar-wrapper not static (need add .transform-x)
.sidebar-wrapper.transform-x .sidebar
  left: -$sidebarWidth

// show
.sidebar-wrapper.active .sidebar
  left: 0
  box-shadow: 4px 2px 4px rgba(0,0,0,.101562)
.sidebar-wrapper.transform-x.active .sidebar
  left: 0


.navbar-inner
  .navbar-nav
    li
      a
        padding: 1rem 2.4rem
        color: rgba(0,0,0,.6)

.sidenav-header,
.sidebar-settings
  padding: 1rem 2.4rem

</style>

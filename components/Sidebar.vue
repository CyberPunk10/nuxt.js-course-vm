<template>
  <div class="sidebar-wrapper active" @click="handleClickSidebar">
    <div class="sidebar layout-scrollbar layout-cell">
      <div class="sidebar-settings">
        <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-1" isChecked title="Sidebar not static and top" />
        <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-2" title="Main-container not static and static Sidebar" />
        <RadioBtn class="comp-radioBtn" name="mode-view-sidebar" id="mode-view-sidebar-3" title="Main-container not static"/>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum sequi obcaecati aut tempora. Aliquid fuga, harum ratione atque eligendi repudiandae perspiciatis quae magni ea iste molestias ipsum dignissimos tenetur, nihil iure quas. Facere quam eos ut sit aliquid unde obcaecati, itaque asperiores consequuntur culpa amet iste omnis eligendi consequatur libero similique recusandae reiciendis illo tempora eaque ex aspernatur. Aut nihil quae molestias voluptate quia accusantium voluptatum fugit totam earum ipsam omnis laborum maxime eius quas similique veritatis adipisci vero, nobis perferendis consequuntur eveniet qui. Dolores libero, commodi sed deleniti nam aut eligendi quaerat? Nemo quibusdam veniam corporis impedit libero molestias amet quam autem cumque. Totam alias veritatis ea, quod doloribus ut perspiciatis ad animi expedita fuga facilis nisi, soluta officia commodi pariatur nam impedit asperiores, voluptate hic laudantium eveniet error. Minus sequi libero suscipit porro ad et eum numquam doloribus alias impedit aliquam, id assumenda excepturi ipsam rem eaque repellendus consequuntur! Numquam fugiat odio consequuntur illo! Doloremque quam unde asperiores? Dolorum similique necessitatibus impedit rem quos quibusdam unde omnis temporibus totam modi voluptates dolore quis at enim, odio quo ex perspiciatis quasi pariatur eveniet. Quod aliquam perferendis architecto molestias exercitationem tempore ea ut soluta error ullam! Minima animi beatae eveniet ratione iusto, ad blanditiis aut velit sit iure adipisci vero sequi impedit cumque accusamus fugit quaerat provident hic eaque, incidunt laboriosam atque? Ipsum quia rem exercitationem est nisi officiis dignissimos, ipsa recusandae dolorem molestiae debitis accusantium illo eum atque eveniet sequi dolorum? Ratione quam, maiores voluptas delectus officia obcaecati tempora explicabo sapiente hic fugiat accusamus in modi qui ab accusantium perferendis fugit ex sequi soluta. Iusto temporibus nam ad, repellendus laudantium, nostrum fugiat deserunt officiis blanditiis suscipit maiores, aliquid sapiente consequuntur omnis consequatur hic! Debitis voluptatem hic dolorem, fuga cumque beatae enim dolor fugiat amet libero quam ipsam quibusdam harum. Excepturi debitis odit temporibus voluptatum quisquam in, quasi obcaecati, quod numquam modi, cupiditate animi illo suscipit asperiores maiores dolor nisi vero maxime facere ab quam ratione hic incidunt neque. Aperiam provident consectetur tenetur, perspiciatis ullam blanditiis, itaque facere quas alias odio minima eos eius ut veritatis ducimus. Laborum dolores ex adipisci necessitatibus, distinctio tempora corrupti sunt nisi consequuntur quas tenetur eum rerum quasi repudiandae cum exercitationem amet itaque autem atque illo officiis ducimus aspernatur. Voluptates alias dolorum quisquam officiis laborum eveniet ipsam blanditiis nihil quaerat rem aliquid quidem hic vel sint excepturi omnis placeat veritatis et facilis, ea sunt.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum sequi obcaecati aut tempora. Aliquid fuga, harum ratione atque eligendi repudiandae perspiciatis quae magni ea iste molestias ipsum dignissimos tenetur, nihil iure quas. Facere quam eos ut sit aliquid unde obcaecati, itaque asperiores consequuntur culpa amet iste omnis eligendi consequatur libero similique recusandae reiciendis illo tempora eaque ex aspernatur. Aut nihil quae molestias voluptate quia accusantium voluptatum fugit totam earum ipsam omnis laborum maxime eius quas similique veritatis adipisci vero, nobis perferendis consequuntur eveniet qui. Dolores libero, commodi sed deleniti nam aut eligendi quaerat? Nemo quibusdam veniam corporis impedit libero molestias amet quam autem cumque. Totam alias veritatis ea, quod doloribus ut perspiciatis ad animi expedita fuga facilis nisi, soluta officia commodi pariatur nam impedit asperiores, voluptate hic laudantium eveniet error. Minus sequi libero suscipit porro ad et eum numquam doloribus alias impedit aliquam, id assumenda excepturi ipsam rem eaque repellendus consequuntur! Numquam fugiat odio consequuntur illo! Doloremque quam unde asperiores? Dolorum similique necessitatibus impedit rem quos quibusdam unde omnis temporibus totam modi voluptates dolore quis at enim, odio quo ex perspiciatis quasi pariatur eveniet. Quod aliquam perferendis architecto molestias exercitationem tempore ea ut soluta error ullam! Minima animi beatae eveniet ratione iusto, ad blanditiis aut velit sit iure adipisci vero sequi impedit cumque accusamus fugit quaerat provident hic eaque, incidunt laboriosam atque? Ipsum quia rem exercitationem est nisi officiis dignissimos, ipsa recusandae dolorem molestiae debitis accusantium illo eum atque eveniet sequi dolorum? Ratione quam, maiores voluptas delectus officia obcaecati tempora explicabo sapiente hic fugiat accusamus in modi qui ab accusantium perferendis fugit ex sequi soluta. Iusto temporibus nam ad, repellendus laudantium, nostrum fugiat deserunt officiis blanditiis suscipit maiores, aliquid sapiente consequuntur omnis consequatur hic! Debitis voluptatem hic dolorem, fuga cumque beatae enim dolor fugiat amet libero quam ipsam quibusdam harum. Excepturi debitis odit temporibus voluptatum quisquam in, quasi obcaecati, quod numquam modi, cupiditate animi illo suscipit asperiores maiores dolor nisi vero maxime facere ab quam ratione hic incidunt neque. Aperiam provident consectetur tenetur, perspiciatis ullam blanditiis, itaque facere quas alias odio minima eos eius ut veritatis ducimus. Laborum dolores ex adipisci necessitatibus, distinctio tempora corrupti sunt nisi consequuntur quas tenetur eum rerum quasi repudiandae cum exercitationem amet itaque autem atque illo officiis ducimus aspernatur. Voluptates alias dolorum quisquam officiis laborum eveniet ipsam blanditiis nihil quaerat rem aliquid quidem hic vel sint excepturi omnis placeat veritatis et facilis, ea sunt.</p>
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

</style>

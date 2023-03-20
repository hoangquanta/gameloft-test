import './../style/header.scss';
import navToggle from './../media/nav-toggle.png';

function Header() {
  return (
    <div className='app-header'>
        <div className='app-header-content'>
            <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="196.568" height="38.959" viewBox="-117.906 2.791 196.568 38.959"><g data-name="CompositeLayer"><path d="M-79.01 41.609c.827.013 1.655-.02 2.479-.097 3.232-.461 5.262-1.819 7.195-5.377.99-1.977.938-5.112.938-5.112l.029-5.524s-.068-2.938-.405-4.407c-.338-1.469-.92-2.673-2.283-4.16a6.132 6.132 0 0 0-1.872-1.36 10.313 10.313 0 0 0-2.788-.882c-1.575-.276-6.056-.217-6.056-.217l-11.423-.077-7.97.156a30.377 30.377 0 0 0-3.186.144c-.89.054-1.74.398-2.415.981a3.82 3.82 0 0 0-1.422 1.937c-.317 1.107-.25 3.722-.25 3.722s.13 4.457.15 5.1c0 .403.162.527.27.562.11.035 2.774.34 2.78.352v-.055a2.738 2.738 0 0 1 2.371-1.643c1.79-.106 21.507-.405 23.12-.44a3.484 3.484 0 0 1 1.554.232c.239.128.426.336.529.587.18.385.24 1.687.24 1.687s-.026 1.762-.026 2.265c0 .673-.343 2.612-2.697 2.612-1.228.041-23.898-.2-23.898-.2a6.443 6.443 0 0 1-2.7-.555c-2.26-1.193-2.982-2.918-3.024-6.626 0-2.556.018-8.579.018-8.579s-.117-2.773 1.804-4.58c1.47-1.405 4.598-1.334 5.036-1.317h.112c.763 0 8.426 0 11.164-.076 2.877-.073 17.45.347 18.181.382.761.018 1.508.206 2.186.552.745.405 1.418.93 1.992 1.555a9.513 9.513 0 0 1 2.04 4.277c.258 1.693.587 7.757.587 7.757s.153 6.32-.435 8.617c-.4 1.566-.881 3.838-2.938 5.794-.373.382-.74.764-.74.764v.02c-.027.062-.089.112 0 .321.255.4.63.708 1.072.881.352.168 1.01-.114 1.663-.528 2.056-1.381 3.161-2.46 4.207-4.634 1.36-2.864 1.434-6.778 1.434-7.295 0-.517-.053-9.696-.053-9.696s.118-3.716-.294-6.096a15.59 15.59 0 0 0-2.459-5.92 8.283 8.283 0 0 0-3.261-2.792 11.873 11.873 0 0 0-1.719-.708c-2.644-.881-5.859-.881-8.52-.963-2.662-.083-13.992-.16-13.992-.16s-8.032.05-11.352.218c-5.254.259-6.576.359-8.956 1.366-2.38 1.008-4.007 3.4-4.533 5.357-.526 1.956-.353 5.224-.353 5.224l.109 13.785c-.04 1.46.022 2.92.185 4.372.376 2.873.882 4.151 1.381 4.918a7.163 7.163 0 0 0 2.891 2.615l.074.035c1.175.562 4.665.958 6.372.964 2.856.115 10.71.1 12.77.106l15.086-.141Z" fill="#141414" fill-rule="evenodd" data-name="Path 210"/><path d="M8.474 28.182v-.755s0-.882 1.055-.929h7.8v-3.282l-7.821.018s-.908 0-.908-.881V21.08a.837.837 0 0 1 .926-.881h8.696l.088-3.458H6.632c-.559 0-2.245.294-2.245 2.406V30.98s-.294 1.986 2.42 1.986h11.527v-3.843H9.44s-.966-.044-.966-.928M-.188 16.735h-2.48c-.666.02-1.116.829-1.116.829l-4.572 7.345s-.267.411-.473.411c-.205 0-.484-.42-.484-.42s-4.472-6.852-4.778-7.345c-.529-.882-1.107-.832-1.107-.832h-2.037c-1.96 0-1.962 2.248-1.962 2.248l-.088 13.965 4.51-.041V22.879s5.109 9.09 5.497 9.769c.203.294.323.408.458.408s.294-.088.488-.408c0-.024 5.538-10.175 5.538-10.175l-.015 10.524h4.364s.038-11.285.038-13.738c0-2.453-1.78-2.527-1.78-2.527m-39.794 7.598h-5.412s.017.176.053.382c.511.102.922.482 1.063.984.02.188.036.97.036 2.307 0 1.072-.588 1.143-.588 1.143h-3.461c-2.024 0-2.23-1.722-2.23-1.722v-4.795c0-2.265 2.174-2.277 2.174-2.277h8.341v-3.614s-5.667-.05-9.86-.05-5.065 3.026-5.065 4.225v5.953c0 6.084 4.495 6.114 4.495 6.114h8.103c2.521 0 2.686-2.266 2.686-2.266s-.03-4.994 0-5.658c.03-.664-.347-.726-.347-.726m11.359-7.639h-2.612a1.396 1.396 0 0 0-1.37.925l-5.86 15.417 4.7-.047 1.114-3.447s5.843.024 5.744.018c.587 1.79 1.051 3.396 1.051 3.396h4.954s-5.847-14.702-6.3-15.53c-.452-.829-1.418-.73-1.418-.73m-2.997 9.49 1.783-5.152 1.698 5.159-3.481-.006Zm63.3 2.998h-5.335c-.925 0-.96-.961-.96-.961V16.782h-4.358s.065 12.554.065 14.488c0 1.848 1.446 1.695 1.692 1.695h11.13c-1.425 0-2.233-3.758-2.233-3.758m13.624-12.425h-6.993c-.881 0-4.463.682-4.463 4.519v6.801s.412 4.942 3.949 4.942c5.78 0 7.933-.108 7.933-.108s4.201-.664 4.201-5.042V21.36s-.42-4.578-4.627-4.578m-2.08 12.516c-1.087 0-3.403-.026-3.403-.026s-1.68.132-1.68-2.092c0-2.533.12-5.189.12-5.189s-.114-1.7 1.866-1.7h3.675a1.904 1.904 0 0 1 1.84 2.035c0 1.995-.133 4.88-.133 4.88s.35 2.08-2.285 2.08m32.025-12.533H54.96c-2.095 0-2.303 1.354-2.303 1.962v14.182l4.204.06s-.015-4.922-.015-5.6c0-.882 1.15-.903 1.15-.903h3.76v-2.973h-3.82c-1.175 0-1.175-.688-1.175-.688v-2.47H67.26v12.633h4.172V20.381s3.82.1 7.23 0c-.563-2.118-2.115-3.634-3.407-3.634" fill="#141414" fill-rule="evenodd" data-name="Path 209"/></g></svg>
            </div>
            <div className='nav-toggle'>
                <img src={navToggle} alt='nav-toggle'/>
            </div>
        </div>
    </div>
  );
}

export default Header;
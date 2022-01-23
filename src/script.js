const root = {
    text: 'Root Folder',
    leaf: false,
    expanded: true,
    children: [{
      text: 'Sub Folder 1',
      leaf: false,
      expanded: false,
      children: [{
        text: 'Sub Sub Folder 1',
        leaf: false,
        expanded: false,
        children: [{
          text: 'SomeFile1.js',
          leaf: true
        }]
      }, {
        text: 'Sub Sub Folder 2',
        leaf: false,
        expanded: false,
        children: []
      }, {
        text: 'SomeFile.txt',
        leaf: true
      }]
    }]
};

const folder = {
  name: "folder",
  template: '#folder-component',
  props: {
    folder: Object
  },
  methods: {
    expand() {
      if (this.folder.leaf) {
        return;
      }

      this.folder.expanded = !this.folder.expanded;
    }
  }
}

const folders = {
  name: 'root',
  template: '#folders-component',
  props: {
    folder: Object
  },
  components: {
    'folder': folder
  }
}

new Vue({
  el: '.vue-app',
  data: () => {
    return root;
  },
  components: {
    'root': folders
  }
});
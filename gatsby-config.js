module.export = {
  siteMetadata: {
    title: `My Test Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  
  
  // This block is for creating blog page from mdx file from scr/posts with layout  
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posts",
      "path": `${__dirname}/src/posts`
    },
    __key: "posts"
  }, 
  
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${__dirname}/src/posts`
    }
  },
  
  { 
    resolve: "gatsby-plugin-mdx",
    options: {
      defaultLayouts: {
        posts: require.resolve('./src/components/post-layout.js')
      }
    }  
  },

  //End block MDX

  //Image plugin
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`
    }
  },


  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',

  //End Image plugin

  //Import data from sanity
  {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: 'vnkupgyb',
      dataset: 'production',
    }
  }


]
};
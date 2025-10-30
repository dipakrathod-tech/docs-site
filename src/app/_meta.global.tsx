import {MetaRecord} from 'nextra'

const PROJECTS: MetaRecord = {
    _: {
        type: 'separator',
        title: 'AWS',
    }
}

const TUTORIALS: MetaRecord = {

}

const WORKSHOPS: MetaRecord = {}

export default { 
    index : {
        type: 'page',
        display : 'hidden',
    },
    docs : {
        title : 'Docs',
        type : 'page',
        items : {
            index:'',
            projects:{
                title: 'Projects',
                items: PROJECTS
            },
            _:{
                type: 'separator',
                title: 'Learning'
            },
            tutorials: {
                title: 'Tutorials',
                items: TUTORIALS
            },
            workshops: {
                title: 'Workshops',
                items: WORKSHOPS
            }

            
        }

    },
    portfolio: {
        title: 'Portfolio',
        type: 'page',
        href: 'https://dipakrathod.me'
     }


}


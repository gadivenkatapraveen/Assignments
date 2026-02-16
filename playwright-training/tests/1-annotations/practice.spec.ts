import{test,expect} from '@playwright/test'

test.describe('group1', async() => {

    test('group1 - test1', async({page})=>{

        console.log('test1 execution completed');

    })

    test('group1 - test2', async({page})=>{

        console.log('test2 execution completed');
    })    

}
)

test.describe('group2', async() => {

    test.fixme('group2 - test1', async({page})=>{

        console.log('group2 test1 execution completed');

    })

    test('group2 - test2', async({page})=>{

        test.slow()
        console.log('group2 test2 execution completed');
    })    

}
)
import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('should not alter text less than 100 characters',() => {
    expect(shortenText(shortText)).toHaveLength(29)

})

test('shortenText should trim text longer than 100 characters and add ... to the end', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount will sum up the number of words in a sentance', () => {
    expect (wordCount(posts)).toBe(233)
})

test('attachUserName should attach a users full name to a post', () => {
    const newPosts = attachUserName(users,posts)
    expect(newPosts[0]).toHaveProperty('displayName')  
})

test('attachUserName should remove any post with no matchin user', () => {
    const newPosts = attachUserName(users,posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})

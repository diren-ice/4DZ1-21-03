import classes from './block.module.css'
const Block = (props) => {
    const list = [
        {
            title: 'Work',
            id: 1
        },
        {
            title: 'To Study',
            id: 2
        },
        {
            title: 'Get a visa',
            id: 3
        },
        {
            title: 'Travel',
            id: 4
        },
        {
            title: 'Come back',
            id: 5
        }
    ]

    const {title, children} = props;
    return (
        <div className={classes.block}>
            <div>
                {list.map((el, id) => <li key={id}>
                    {el.title}
                </li>)}
            </div>
        </div>
    )
}

export default Block
export const GREETING = {
    SKILL_ID:
        process.env.GREETING_SKILL_ID ?? '7f76afa5-a075-405c-9773-fd8fe509c083',
    RESOURCES_IDS: (process.env.GREETING_RESOURCES_IDS ?? '').split(',') ?? [
        '20279f08-31d4-42c5-b6ca-0bceaf8c712c',
    ],
}

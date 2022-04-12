import {act, fireEvent, render, screen} from "@testing-library/react";
import { CharactersList } from "./CharactersList";
import { fetchFiltered, fetchAll } from "../api/users";

jest.mock('../api/users', () => ({
    fetchFiltered: jest.fn(),
    fetchAll: jest.fn(),
}))

describe('<CharactersList />', () => {
    it('should have a text input', async () => {
        await act(async () => {
            render(<CharactersList />)
        })
        const items = await screen.queryByTestId('user search')

        expect(items).not.toBeNull()
    });

    describe('when there is "Anna", "Bob", and "Claire" in the list', () => {
        beforeEach(() => {
            // set mocks to [anna bob claire]
            // @ts-ignore
            fetchAll.mockImplementation(() => {
                return ['anna', 'bob', 'clair']
            })
            // @ts-ignore
            fetchFiltered.mockImplementation(() => {
                return ['anna']
            })
        })
        it('should show Anna if Anna is typed in the input', async () => {
            await act(async () => {
                await render(<CharactersList />)
            })

            await act(async () => {
                fireEvent.change(await screen.findByTestId('user search'), {target: {value: 'anna'}})
            })

            const items = await screen.queryByText('anna')

            expect(items).not.toBeNull()
        });

        it('should not show bob and clair if anna is typed in the input', () => {
            // render component

            // type anna in the input

            // expect bob not to be in the input
            // expect claire not to be in the input
        });
    })
});
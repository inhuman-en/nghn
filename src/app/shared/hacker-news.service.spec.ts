import { HackerNewsService } from './hacker-news.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

fdescribe('HackerNewsService', () => {
    let sut: HackerNewsService;
    let httpMock: any;

    const setup = () => {
        httpMock = {
            get: () => {}
        };
        sut = new HackerNewsService(httpMock);
    };

    beforeEach(setup);

    describe('top news', () => {
        it('should fetch top news by page id passed', (done) => {
            const expectedNews = [
                {
                    id: 1,
                    title: 'test',
                    link: 'http://example.com'
                }
            ];

            spyOn(httpMock, 'get').and.returnValue(of(expectedNews));

            sut.getNews(1)
               .toPromise()
               .then((news) => {
                   expect(news).toBe(expectedNews);
                    done();
               });
        });
    });
});

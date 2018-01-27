import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HackerNewsService {
    constructor(private http: HttpClient) {}

    private apiRoot: String = 'https://node-hnapi.herokuapp.com';

    getNews(page: Number): Observable<any> {
        return of([
            {
                id: 16246227,
                title: 'FOSDEM 2018 schedule',
                points: 47,
                user: 'simon_acca',
                time: 1517061471,
                time_ago: '2 hours ago',
                comments_count: 8,
                type: 'link',
                url: 'https://fosdem.org/2018/schedule/',
                domain: 'fosdem.org'
            },
            {
                id: 16245817,
                title: 'Terraforming 1Password',
                points: 89,
                user: 'kawera',
                time: 1517052862,
                time_ago: '4 hours ago',
                comments_count: 19,
                type: 'link',
                url:
                    'https://blog.agilebits.com/2018/01/25/terraforming-1password/',
                domain: 'blog.agilebits.com'
            },
            {
                id: 16246021,
                title: 'Nicolas Cage DeepFake',
                points: 42,
                user: 'mariuz',
                time: 1517057376,
                time_ago: '3 hours ago',
                comments_count: 28,
                type: 'link',
                url:
                    'http://prostheticknowledge.tumblr.com/post/170154814961/nicolas-cage-deepfake-redditor-derpfakes-has',
                domain: 'prostheticknowledge.tumblr.com'
            },
            {
                id: 16245142,
                title:
                    'An Italian Song That Sounds Like English But Is Nonsense',
                points: 269,
                user: 'idiocratic',
                time: 1517035111,
                time_ago: '9 hours ago',
                comments_count: 143,
                type: 'link',
                url:
                    'https://www.atlasobscura.com/articles/deep-roots-italian-song-sounds-like-english-american-medieval-comedy-nonsense',
                domain: 'atlasobscura.com'
            },
            {
                id: 16245606,
                title: 'My Delorean runs Perl',
                points: 61,
                user: 'rcarmo',
                time: 1517047417,
                time_ago: '6 hours ago',
                comments_count: 5,
                type: 'link',
                url:
                    'https://opensource.com/article/18/1/my-delorean-runs-perl',
                domain: 'opensource.com'
            },
            {
                id: 16245873,
                title: 'Data Science at the Command Line',
                points: 15,
                user: 'kawera',
                time: 1517054025,
                time_ago: '4 hours ago',
                comments_count: 1,
                type: 'link',
                url: 'https://www.datascienceatthecommandline.com/',
                domain: 'datascienceatthecommandline.com'
            },
            {
                id: 16246093,
                title: 'What Life Looks Like When Night Lasts for Days',
                points: 15,
                user: 'walkingolof',
                time: 1517058906,
                time_ago: '2 hours ago',
                comments_count: 2,
                type: 'link',
                url:
                    'https://www.nytimes.com/2018/01/26/reader-center/arctic-winter-night.html',
                domain: 'nytimes.com'
            },
            {
                id: 16244298,
                title:
                    'USAF Is Jamming GPS in Western U.S. For Largest Ever Red Flag Air War Exercise',
                points: 186,
                user: 'tonyztan',
                time: 1517016589,
                time_ago: '14 hours ago',
                comments_count: 116,
                type: 'link',
                url:
                    'http://www.thedrive.com/the-war-zone/17987/usaf-is-jamming-gps-in-the-western-u-s-for-largest-ever-red-flag-air-war-exercise',
                domain: 'thedrive.com'
            },
            {
                id: 16246089,
                title:
                    'SpaceX’s Falcon Heavy launch is reportedly set for February 6th',
                points: 46,
                user: 'janantala',
                time: 1517058875,
                time_ago: '2 hours ago',
                comments_count: 0,
                type: 'link',
                url: 'https://twitter.com/ChrisG_NSF/status/956964986353528832',
                domain: 'twitter.com'
            },
            {
                id: 16245284,
                title:
                    'Newton’s Financial Misadventures in the South Sea Bubble [pdf]',
                points: 60,
                user: 'jpelecanos',
                time: 1517039217,
                time_ago: '8 hours ago',
                comments_count: 18,
                type: 'link',
                url: 'http://www.dtc.umn.edu/~odlyzko/doc/mania13.pdf',
                domain: 'dtc.umn.edu'
            },
            {
                id: 16246394,
                title:
                    'The Human Diagnosis Project is hiring mission-driven software engineers',
                points: null,
                user: null,
                time: 1517064782,
                time_ago: '41 minutes ago',
                comments_count: 0,
                type: 'job',
                url: 'https://www.humandx.org/team#engineering',
                domain: 'humandx.org'
            },
            {
                id: 16244835,
                title: 'If you watch closely enough, everything is a speaker',
                points: 157,
                user: 'jXCw1N0jtH3',
                time: 1517026574,
                time_ago: '11 hours ago',
                comments_count: 31,
                type: 'link',
                url:
                    'https://kottke.org/18/01/if-you-watch-closely-enough-everything-is-a-speaker',
                domain: 'kottke.org'
            },
            {
                id: 16245697,
                title:
                    'Ted Nelson’s published papers on computers and interaction, 1965 to 1977',
                points: 55,
                user: 'krstoff',
                time: 1517049787,
                time_ago: '5 hours ago',
                comments_count: 15,
                type: 'link',
                url: 'https://archive.org/details/SelectedPapers1977',
                domain: 'archive.org'
            },
            {
                id: 16244175,
                title: 'Postgres indexes under the hood',
                points: 129,
                user: 'rusbus',
                time: 1517014530,
                time_ago: '15 hours ago',
                comments_count: 15,
                type: 'link',
                url: 'https://rcoh.me/posts/postgres-indexes-under-the-hood/',
                domain: 'rcoh.me'
            },
            {
                id: 16243306,
                title: 'Alto Restoration Part 18: We Crash Our Disk Drive',
                points: 7,
                user: 'kencausey',
                time: 1517004619,
                time_ago: '17 hours ago',
                comments_count: 0,
                type: 'link',
                url: 'https://www.youtube.com/watch?v=G_gKIvDgBHs',
                domain: 'youtube.com'
            },
            {
                id: 16244564,
                title:
                    'Fish skin helped bears burned in the Thomas Fire get back on their feet',
                points: 13,
                user: 'DoreenMichele',
                time: 1517021355,
                time_ago: '13 hours ago',
                comments_count: 1,
                type: 'link',
                url:
                    'http://www.sanluisobispo.com/news/local/environment/article196736809.html',
                domain: 'sanluisobispo.com'
            },
            {
                id: 16246409,
                title:
                    'Efficacy of elderberry extract for treatment of influenza a and B virus',
                points: 9,
                user: 'SQL2219',
                time: 1517065020,
                time_ago: '37 minutes ago',
                comments_count: 2,
                type: 'link',
                url: 'https://www.ncbi.nlm.nih.gov/pubmed/15080016',
                domain: 'ncbi.nlm.nih.gov'
            },
            {
                id: 16246424,
                title:
                    'Intel: Meltdown, Spectre silicon fixes coming 2018; 3D XPoint RAM, not so much',
                points: 4,
                user: 'jjuhl',
                time: 1517065275,
                time_ago: '33 minutes ago',
                comments_count: 0,
                type: 'link',
                url:
                    'https://arstechnica.com/gadgets/2018/01/intel-meltdown-spectre-silicon-fixes-coming-2018-3d-xpoint-ram-not-so-much/',
                domain: 'arstechnica.com'
            },
            {
                id: 16244827,
                title:
                    "New population of one of world's rarest fish found off Tasmania",
                points: 47,
                user: 's0rce',
                time: 1517026400,
                time_ago: '11 hours ago',
                comments_count: 5,
                type: 'link',
                url:
                    'https://www.npr.org/sections/thetwo-way/2018/01/26/580977484/one-of-the-world-s-rarest-fish-is-a-little-less-rare-than-we-thought',
                domain: 'npr.org'
            },
            {
                id: 16243795,
                title:
                    'Cavalier collector: how Charles I gained (and lost) some of the world’s best art',
                points: 10,
                user: 'prismatic',
                time: 1517009816,
                time_ago: '16 hours ago',
                comments_count: 1,
                type: 'link',
                url:
                    'https://www.newstatesman.com/culture/art-design/2018/01/cavalier-collector-how-charles-i-gained-and-lost-some-world-s-best-art',
                domain: 'newstatesman.com'
            },
            {
                id: 16245034,
                title: 'Python 1.0.0 is out (1994)',
                points: 119,
                user: 'sndean',
                time: 1517032002,
                time_ago: '10 hours ago',
                comments_count: 93,
                type: 'link',
                url:
                    'https://groups.google.com/forum/?hl=en#!topic/comp.lang.misc/_QUzdEGFwCo',
                domain: 'groups.google.com'
            },
            {
                id: 16242336,
                title: 'Extensions in Firefox 59',
                points: 444,
                user: 'ac29',
                time: 1516996393,
                time_ago: '20 hours ago',
                comments_count: 195,
                type: 'link',
                url:
                    'https://blog.mozilla.org/addons/2018/01/26/extensions-firefox-59/',
                domain: 'blog.mozilla.org'
            },
            {
                id: 16245077,
                title:
                    'Promising Billions to Amazon: Is It a Good Deal for Cities?',
                points: 21,
                user: 'rafaelc',
                time: 1517033449,
                time_ago: '9 hours ago',
                comments_count: 11,
                type: 'link',
                url:
                    'https://www.nytimes.com/2018/01/26/business/economy/amazon-finalists-incentives.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news',
                domain: 'nytimes.com'
            },
            {
                id: 16244194,
                title: 'Increased Network Bandwidth for EC2 Instances',
                points: 62,
                user: 'jeffbarr',
                time: 1517014816,
                time_ago: '15 hours ago',
                comments_count: 17,
                type: 'link',
                url:
                    'https://aws.amazon.com/blogs/aws/the-floodgates-are-open-increased-network-bandwidth-for-ec2-instances/',
                domain: 'aws.amazon.com'
            },
            {
                id: 16240587,
                title:
                    '3,500 Occult Manuscripts Will Be Digitized and Made Freely Available Online',
                points: 380,
                user: 'RmDen',
                time: 1516985180,
                time_ago: 'a day ago',
                comments_count: 89,
                type: 'link',
                url:
                    'http://www.openculture.com/2017/12/3500-occult-manuscripts-will-be-digitized-made-freely-available-online.html',
                domain: 'openculture.com'
            },
            {
                id: 16243539,
                title: "The 'Agra Scroll': Agra in the early 19th century",
                points: 9,
                user: 'Thevet',
                time: 1517007002,
                time_ago: '17 hours ago',
                comments_count: 0,
                type: 'link',
                url:
                    'http://blogs.bl.uk/asian-and-african/2018/01/the-agra-scroll-agra-in-the-early-19th-century.html',
                domain: 'blogs.bl.uk'
            },
            {
                id: 16238937,
                title: 'How to Run Your Own Mail Server (2017)',
                points: 547,
                user: 'j_s',
                time: 1516973358,
                time_ago: 'a day ago',
                comments_count: 301,
                type: 'link',
                url: 'https://www.c0ffee.net/blog/mail-server-guide',
                domain: 'c0ffee.net'
            },
            {
                id: 16240234,
                title: 'Building an AlphaZero AI using Python and Keras',
                points: 367,
                user: 'davidfoster',
                time: 1516983021,
                time_ago: 'a day ago',
                comments_count: 52,
                type: 'link',
                url:
                    'https://applied-data.science/blog/how-to-build-your-own-alphazero-ai-using-python-and-keras/',
                domain: 'applied-data.science'
            },
            {
                id: 16240911,
                title:
                    'Dark Site Finder: tracking light pollution to find locations for stargazing',
                points: 291,
                user: 'kibwen',
                time: 1516987108,
                time_ago: 'a day ago',
                comments_count: 74,
                type: 'link',
                url: 'http://darksitefinder.com/maps/world.html',
                domain: 'darksitefinder.com'
            },
            {
                id: 16236832,
                title: 'NASA’s IMAGE satellite, lost since 2005, is alive',
                points: 797,
                user: 'sohkamyung',
                time: 1516937416,
                time_ago: '2 days ago',
                comments_count: 87,
                type: 'link',
                url:
                    'https://skyriddles.wordpress.com/2018/01/21/nasas-long-dead-image-satellite-is-alive/',
                domain: 'skyriddles.wordpress.com'
            }
        ]);
        //   return this.http
        //     .get(`${this.apiRoot}/news?page=${page}`);
    }
}
